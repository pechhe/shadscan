# Dependencies

Package manager: pnpm 11 (workspace: root site + `packages/cli`). Node 24 in `engines`.

## Surfaces

- `package.json` and `packages/cli/package.json` (the CLI's runtime deps ship to npm).
- `pnpm-workspace.yaml` overrides (security floors for transitive packages; raise to the patched version, never lower).
- `pnpm-lock.yaml`.
- Prose version pins of the CLI are checked by `pnpm docs:pins:check`.

## Clusters

- Next: `next` and `@next/env` share one exact version.
- React: `react`, `react-dom`, `@types/react`, `@types/react-dom`.
- Biome: `@biomejs/biome` and `ultracite` (ultracite's rule set drives `pnpm check`).
- Tailwind: `tailwindcss` and `@tailwindcss/postcss`.
- Tests: `vitest` in the root and CLI; `@types/node` in the CLI follows the lowest Node it type-checks against (22), the site follows the engine (24).
- `tar-stream` ships its own streamx-based types; do not add `@types/tar-stream`. `js-yaml` ships its own types.

## Constraints

- `next`/`@next/env` held at 16.2.12: 16.3.x makes `pnpm verify:trace` fail (traces of `route-cache-key.js` omit the Next files it requires). Release: a Next version whose traces pass the guard. 16.2.x carries three audit advisories fixed only in 16.3.3/16.3.6, so `pnpm audit:dependencies` fails until then.
- `@biomejs/biome` 2.4.16 / `ultracite` 7.8.3: biome 2.5 + ultracite 7.12 add rules (e.g. `noJsxPropsBind`, ~20 unfixable findings plus a repo-wide key re-sort). Release: a dedicated lint-migration change.
- `typescript` 5.x: 7.0 not attempted. `@types/node` held to the engine majors.

## Commands

Bump: `pnpm up -r --latest` (then restore the constraints above). Install: `pnpm install`.

Verification set: `pnpm typecheck`, `pnpm check`, `pnpm cli:test`, `pnpm test:api`, `pnpm test:web`, `pnpm docs:check`, `pnpm ci:build-site`, `pnpm verify:trace`, `pnpm audit:self`, `pnpm audit:dependencies`. `pnpm test:e2e` needs Playwright browsers.

## Ground rules

- pnpm only; no other lockfiles. Do not hand-edit generated rule docs (`pnpm docs:rules`).
