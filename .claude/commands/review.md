---
description: Review the current branch's changes against main
argument-hint: [optional focus area]
---

Review the changes on the current branch.

1. Run `git diff main...HEAD` and `git status` to see what changed.
2. Delegate the deep review to the `code-reviewer` agent.
3. If anything touches env vars, user input, external URLs or `dangerouslySetInnerHTML`,
   also run the `security-auditor` agent.
4. Run `npm run lint` and `npx tsc --noEmit` and include failures.

Extra focus from the user: $ARGUMENTS

Report findings grouped as **Blocking**, **Should fix**, **Nits**, each with `file:line`.
