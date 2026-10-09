---
description: Verify the app builds cleanly and prepare it for deployment
argument-hint: [preview|production]
---

Prepare a deployment. Target (default `preview`): $ARGUMENTS

1. Make sure the working tree is clean (`git status`). Stop and report if it is not.
2. Run `npm ci`, then `npm run lint`, then `npm run build`. Stop on the first failure and
   show the error with a proposed fix.
3. Summarize the build output (route list, any warnings, large bundles).
4. Do NOT deploy or push to the main branch yourself. Tell the user the exact command to run
   (e.g. `vercel` for preview, `vercel --prod` for production) or push a branch for a PR.
