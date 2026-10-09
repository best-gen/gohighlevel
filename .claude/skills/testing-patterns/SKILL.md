---
name: testing-patterns
description: How to verify changes in this Next.js project. Use when writing or running tests, checking that a change works, or before declaring a task done.
---

# Testing patterns

The project has no unit-test runner yet. Verify every change with these layers,
cheapest first:

1. **Lint** – `npm run lint` (ESLint 9 flat config, Next core-web-vitals rules).
2. **Types** – `npx tsc --noEmit` (strict mode).
3. **Build** – `npm run build`. Catches Server/Client Component boundary errors,
   bad imports, and prerender failures.
4. **Runtime** – `npm run dev`, then load http://localhost:3000. Shader components
   need WebGL, so check them in a real browser (Playwright with Chromium works
   headless) and watch the console for WebGL/hydration errors.

## Adding tests

If the user asks for automated tests, prefer:

- **Vitest + React Testing Library** for components (`*.test.tsx` next to the component).
  Mock `@paper-design/shaders-react` — jsdom has no WebGL.
- **Playwright** for end-to-end checks in `e2e/`, asserting on visible UI
  (buttons, labels) rather than canvas pixels.

Add the matching `test` / `test:e2e` scripts to `package.json` and document them in `CLAUDE.md`.

## Rules

- Never claim a change works without running at least steps 1–3.
- Report failures with the actual error output.
