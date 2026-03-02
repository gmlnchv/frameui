# Frame UI Registry

A lightweight, static registry for Frame UI components.

## Architecture

This project has been optimized for minimal overhead:

- **Registry**: Built using `shadcn build`. Components are defined in `registry.json` and compiled into static JSON files in `public/r/`.
- **Site**: A single-page static site built with Vite and Tailwind v4.
- **Components**: Framework-agnostic Web Components built with Lit.

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

This will:

1. Build the registry JSON files into `public/r/`.
2. Bundle the landing page into `dist/`.

## Using Components

Install components using the shadcn CLI:

```bash
npx shadcn@latest add "https://frameui.chrctr.dev/r/frameui.json"
```

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation on registry schemas.
