#!/usr/bin/env node
// PostToolUse(Edit|Write|MultiEdit) hook: auto-format the file Claude just edited
// with Prettier and ESLint --fix. Best-effort and non-blocking: it always exits 0
// so a formatting hiccup never interrupts the session.

import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const CODE_EXT = new Set(['.ts', '.mts', '.cts', '.js', '.cjs', '.mjs']);
// Mirror .eslintignore / .prettierignore so generated and vendored code is skipped.
const IGNORED = ['node_modules', 'dist', 'lib', 'cdn', 'coverage', 'openapi-spec', 'src/api', 'custom-templates'];

function readStdin() {
  try {
    return readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

let filePath = '';
try {
  const data = JSON.parse(readStdin() || '{}');
  filePath = (data.tool_input && data.tool_input.file_path) || '';
} catch {
  process.exit(0);
}
if (!filePath) process.exit(0);

const abs = path.isAbsolute(filePath) ? filePath : path.join(projectDir, filePath);
const rel = path.relative(projectDir, abs);
if (rel.startsWith('..')) process.exit(0); // outside the project
if (!CODE_EXT.has(path.extname(abs))) process.exit(0);
if (IGNORED.some((d) => rel === d || rel.startsWith(d + path.sep))) process.exit(0);

const run = (cmd, args) => {
  try {
    execFileSync(cmd, args, { cwd: projectDir, stdio: 'ignore' });
  } catch {
    /* ignore: tool missing, or lint rules the model will see on Stop anyway */
  }
};

run('npx', ['--no-install', 'prettier', '--write', abs]);
run('npx', ['--no-install', 'eslint', '--fix', abs]);

process.exit(0);
