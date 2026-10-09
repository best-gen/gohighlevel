---
description: Investigate and fix a GitHub issue
argument-hint: <issue number or description>
---

Fix the issue: $ARGUMENTS

1. If a number was given, read the issue from GitHub to get the full context.
2. Find the relevant code (start in `app/` and `components/ui/`) and explain the root cause.
3. Read the relevant guide in `node_modules/next/dist/docs/` before using any Next.js API.
4. Make the smallest change that fixes it, following the conventions in `CLAUDE.md`.
5. Verify with `npm run lint` and `npm run build` (see the `testing-patterns` skill).
6. Create a branch `fix/<short-name>`, commit with a message referencing the issue
   (e.g. `Fix #123: ...`), and push. Do not open a PR unless asked.
