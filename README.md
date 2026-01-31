# Workflow Builder

> A lightweight React + Vite app for building and visualizing workflows using simple node canvas.

---

## Live demo

Visit the live demo: [Link](https://workflowbuilderui.netlify.app/)

---

## Features

- Three distinct Node Types that a user can add (Action, Branch, End)
- User can add a new Node after any existing non-End Node
- User can add Branch Node to have condition
- User can delete any Node except the initial Node
- User can edit the label of the Node via simple prompt
- User can click the Save button and open up dev tools and see the whole workflow tree in console

---

## Tech Stack

- React 19
- Vite
- ESLint
- Vanilla CSS

---

## Getting started

Prerequisites: Node.js (16+) and npm.

Install and run locally:

```bash
git clone https://github.com/bingecoder89/workflow-builder.git
cd workflow-builder
npm install
npm run dev
```

Available npm scripts (from [package.json](package.json)):

- `dev`: Runs the Vite dev server
- `build`: Builds the production bundle
- `preview`: Serves the production build locally
- `lint`: Runs ESLint across the project

To build for production:

```bash
npm run build
npm run preview
```

---

## Project files

- [index.html](index.html) — App entry
- [package.json](package.json) — scripts and dependencies
- [vite.config.js](vite.config.js) — Vite configuration
- [eslint.config.js](eslint.config.js) — ESLint configuration
- [src/main.jsx](src/main.jsx) — React entry
- [src/App.jsx](src/App.jsx) — App root component
- [src/style.css](src/style.css) — Global styles
- [src/components/Header.jsx](src/components/Header.jsx)
- [src/components/SaveButton.jsx](src/components/SaveButton.jsx)
- [src/components/WorkflowCanvas.jsx](src/components/WorkflowCanvas.jsx)
- [src/components/WorkflowNode.jsx](src/components/WorkflowNode.jsx)

---

## Development notes

- Components are simple functional React components; follow their patterns when adding new nodes or tools.
- Add new styles to `src/style.css` or component-level CSS as needed.
- Run `npm run lint` before opening PRs.

---

## Contributing

1. Fork the repository and create a feature branch.
2. Run `npm install` and `npm run dev` to test changes locally.
3. Open a pull request with a clear description and screenshots if applicable.

---

## License

This project has no license specified. Add a `LICENSE` file if you wish to make the project open source.
