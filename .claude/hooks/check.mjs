#!/usr/bin/env node
// Stop hook: validate the working tree with type:check and lint when Claude is
// about to finish. If either reports problems, exit 2 so the findings are fed
// back to the model to fix. Guards against infinite loops via stop_hook_active.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

let stopHookActive = false;
try {
  const data = JSON.parse(readStdin() || '{}');
  stopHookActive = Boolean(data.stop_hook_active);
} catch {
  /* ignore */
}
// Already re-entered from a previous block of this hook: don't block again.
if (stopHookActive) process.exit(0);

function tryRun(script) {
  try {
    execSync(`npm run --silent ${script}`, { cwd: projectDir, stdio: 'pipe' });
    return null;
  } catch (err) {
    const out = `${err.stdout || ''}${err.stderr || ''}`.trim();
    // Treat "missing tooling / not installed" as an environment issue, not a
    // violation, so we never block when deps aren't installed.
    if (/missing script|ENOENT|command not found|Cannot find module|not found/i.test(out)) {
      return null;
    }
    return out || `npm run ${script} failed`;
  }
}

const problems = [];
for (const script of ['type:check', 'lint']) {
  const result = tryRun(script);
  if (result) problems.push(`# ${script}\n${result}`);
}

if (problems.length) {
  process.stderr.write(`Stop blocked: fix these before finishing.\n\n${problems.join('\n\n')}\n`);
  process.exit(2);
}
process.exit(0);
