// PreToolUse hook: block direct pushes to main/master. Work on a branch and open a PR.
let input = ""
for await (const chunk of process.stdin) input += chunk

const command = JSON.parse(input || "{}").tool_input?.command ?? ""
const pushesProtectedBranch = command
  .split(/&&|\|\||;|\n/)
  .some((part) => /^\s*git\s+push\b/.test(part) && /(\s|:)(main|master)(\s|$)/.test(part))

if (pushesProtectedBranch) {
  process.stderr.write("Direct pushes to main/master are blocked. Push a feature branch and open a PR.\n")
  process.exit(2)
}
