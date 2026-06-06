#!/usr/bin/env node
// PreToolUse(Bash) guard: block catastrophic / RCE-style shell commands before
// Claude Code runs them. Reads the hook JSON on stdin; exit 2 = deny (the stderr
// message is shown to the model so it can choose a safer command). This is a
// best-effort footgun blocker layered on top of the declarative permissions.deny
// list in settings.json — it is NOT a security sandbox.

import { readFileSync } from 'node:fs';

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

let command = '';
try {
  const data = JSON.parse(readStdin() || '{}');
  command = (data.tool_input && data.tool_input.command) || '';
} catch {
  process.exit(0); // can't parse input -> don't interfere
}
if (!command) process.exit(0);

// Recursive+forced rm aimed at a dangerous target (NOT e.g. `rm -rf node_modules`).
function dangerousRm(c) {
  const m = c.match(/\brm\b([^\n;|&]*)/g);
  if (!m) return false;
  return m.some((seg) => {
    const rest = seg.replace(/^\s*rm\b/, '');
    const recursive = /(^|\s)-[a-zA-Z]*r/i.test(rest) || /--recursive\b/.test(rest);
    if (!recursive) return false;
    const targets = rest
      .split(/\s+/)
      .filter((t) => t && !t.startsWith('-'))
      .map((t) => t.replace(/['"]/g, ''));
    const danger = new Set(['/', '~', '~/', '*', '.', './', '..', '/*', '$HOME', '${HOME}']);
    return targets.some((t) => danger.has(t) || /^\/\*?$/.test(t));
  });
}

const rules = [
  { test: (c) => dangerousRm(c), reason: 'Recursive force-remove targeting /, ~, ., or * (mass deletion).' },
  { re: /:\s*\(\)\s*\{[^}]*\|[^}]*&/, reason: 'Fork bomb.' },
  { re: /\bmkfs\b/, reason: 'Filesystem format (mkfs).' },
  { re: /\bdd\b[^\n]*\bof=\/dev\//, reason: 'dd writing directly to a device.' },
  { re: />\s*\/dev\/(sd|nvme|hd|disk|mmcblk)/, reason: 'Redirect to a raw block device.' },
  { re: /\bchmod\s+(-[a-zA-Z]*\s+)?0?777\b/, reason: 'World-writable chmod 777.' },
  { re: /\bsudo\b/, reason: 'Privilege escalation with sudo.' },
  { re: /\b(curl|wget)\b[^|]*\|\s*(sudo\s+)?(ba|z|k)?sh\b/, reason: 'Piping a download straight into a shell (remote code execution).' },
  { re: /\beval\b[^\n]*\b(curl|wget)\b/, reason: 'eval of remotely fetched content.' },
  { re: /\bgit\b[^\n]*\bpush\b[^\n]*--force(?!-with-lease)/, reason: 'git push --force (use --force-with-lease, and confirm first).' },
];

for (const rule of rules) {
  const hit = rule.re ? rule.re.test(command) : rule.test(command);
  if (hit) {
    process.stderr.write(`Blocked by guard-bash hook: ${rule.reason}\nCommand: ${command}\n`);
    process.exit(2);
  }
}

process.exit(0);
