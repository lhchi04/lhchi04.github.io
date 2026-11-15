# personal-web

My personal website and project portfolio. Built with [Astro](https://astro.build),
TypeScript, and Tailwind CSS. Static output, near-zero client JavaScript.

## Getting started

Requires Node 22 (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev        # http://localhost:4321
```

## Scripts

| Command           | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Start the dev server                                    |
| `npm run build`   | Build the static site into `dist/`                      |
| `npm run preview` | Serve the built site locally                            |
| `npm run check`   | Type-check `.astro` / `.ts` files and content           |
| `npm run lint`    | ESLint                                                  |
| `npm run format`  | Format everything with Prettier                         |
| `npm run ci`      | Format check + lint + type check + build (CI runs this) |

## Adding a project

Create `src/content/projects/<slug>.md` with frontmatter matching the schema in
`src/content.config.ts`. Invalid frontmatter fails the build.
