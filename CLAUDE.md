@AGENTS.md

# Project overview

Landing page built on Next.js (App Router) that renders animated WebGL shader
backgrounds from `@paper-design/shaders-react` (MeshGradient, DotOrbit) with a
small control panel.

## Tech stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` (config lives in `app/globals.css`, no `tailwind.config.*`)
- `tw-animate-css` for animation utilities
- `@paper-design/shaders-react`, `three`, `@react-three/fiber` for graphics
- ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next`

## Layout

- `app/` – routes, root layout, global styles
- `components/ui/` – reusable UI components (shadcn-style, client components)
- `public/` – static assets
- Import alias: `@/*` maps to the repo root

## Commands

- `npm run dev` – dev server on http://localhost:3000
- `npm run build` – production build (also type-checks)
- `npm run lint` – ESLint
- `npx tsc --noEmit` – type-check only

There is no test runner yet; see `.claude/skills/testing-patterns/SKILL.md`.

## Conventions

- Default to Server Components; add `"use client"` only for components that use
  state, effects, browser APIs, or WebGL (all shader components are client-only).
- Style with Tailwind utility classes; avoid new CSS files.
- Component files: kebab-case filenames, default-export the main component.
- Before finishing a change, run `npm run lint` and `npm run build`.
