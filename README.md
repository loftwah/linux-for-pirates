# Linux for Pirates - Astro Website

This is an Astro-powered website for the "Linux for Pirates" guide, featuring Tailwind CSS 4 and dark mode support.

## Features

- Built with Astro 5.5+
- Styled with Tailwind CSS 4
- Dark/Light mode toggle that respects user preferences
- Responsive design optimized for all devices
- Optimized for GitHub Pages deployment

## Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview the build
npm run preview
```

## Deployment

This site is configured to deploy to GitHub Pages using GitHub Actions. When you push to the main branch, it will automatically build and deploy your site.

## Technology Stack

- [Astro](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)

## License

Same as the original Linux for Pirates repository.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
