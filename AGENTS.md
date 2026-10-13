<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

## Project Overview

**Next.js 16.4.0** + **React 19.3.0** + **shadcn/ui (radix-nova style)** + **Tailwind CSS v4** + **TypeScript 5**

- App Router (`app/`)
- Path aliases: `@/*` → `./*`
- CSS variables for theming (`cssVariables: true`)

---

## Commands

```bash
# Development
npm run dev          # Start dev server (next dev)

# Build & Verification
npm run build        # Production build (next build)
npm run typecheck    # TypeScript check (tsc --noEmit)
npm run lint         # ESLint (eslint)
npm run format       # Prettier (prettier --write "**/*.{ts,tsx}")

# Recommended order: typecheck → lint → build
```

---

## Key Conventions

- **UI Components**: `components/ui/` — generated via `npx shadcn@latest add <component>`
- **Import alias**: `@/components/ui/button`
- **Utility**: `cn()` from `@/lib/utils` (re-exports `cn` package)
- **Theme**: Dark mode via `next-themes`, toggle with `d` key (not in inputs)
- **Fonts**: Geist + Geist Mono via `next/font/google`
- **Icons**: Lucide React

---

## Testing & CI

No test framework configured. Add vitest/jest if needed.

---

## Gotchas

- **Next.js 16** — Check `node_modules/next/dist/docs/` for breaking changes
- **React 19** — New APIs, concurrent features default
- **Tailwind v4** — Config in `app/globals.css`, not `tailwind.config.ts`
- **ESM only** (`"type": "module"` in package.json)
- **No `next.config.ts` customization** — empty config currently
- **shadcn registries** empty in `components.json` — using default registry