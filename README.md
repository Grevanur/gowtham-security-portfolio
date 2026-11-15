# Gowtham Revanur — Security Engineering Portfolio

A responsive personal portfolio focused on cybersecurity, agentic AI security, AI-agent observability, and spatial security research.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 with `@tailwindcss/vite`
- Motion for React

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is generated in `dist/`.

## Cloudflare Pages

Use these settings when importing this repository into Cloudflare Pages:

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20` or newer

No environment variables are required.
