// PostToolUse hook: run ESLint (with --fix) on any JS/TS file Claude edits.
// Exit code 2 feeds lint errors back to Claude so it can fix them.
import { spawnSync } from "node:child_process"

let input = ""
for await (const chunk of process.stdin) input += chunk

const filePath = JSON.parse(input || "{}").tool_input?.file_path
if (!filePath || !/\.(m?[jt]sx?)$/.test(filePath)) process.exit(0)

const result = spawnSync("npx", ["--no-install", "eslint", "--fix", filePath], {
  cwd: process.env.CLAUDE_PROJECT_DIR,
  encoding: "utf8",
})

if (result.status !== 0 && result.status !== null) {
  process.stderr.write(result.stdout + result.stderr)
  process.exit(2)
}
