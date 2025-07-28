# React SSR App with React Router v7 and Fluent 2


## Features

- Server-side rendering (SSR) with React and Express
- Routing powered by React Router v7 Framework Mode
- Fluent 2 UI for modern, accessible components
- Basic Home and About pages
- Layout with Fluent 2 navigation


## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Build the client app:**

   ```bash
   npm run build
   ```

3. **Run the SSR server:**

   ```bash
   npx ts-node server.ts
   ```

   The server will start at [http://localhost:3000](http://localhost:3000)


## Development

- For client-side development, use:

  ```bash
  npm run dev
  ```

  This starts the Vite dev server at [http://localhost:5173](http://localhost:5173)


## Notes

- The SSR server uses TypeScript and ts-node. Ensure you have all dev dependencies installed.
- Fluent UI SSR is enabled using Griffel renderer and style extraction.
- Static assets and client bundle are served from the `dist/` folder.


## Project Structure

- `/src` - Main source code
- `/src/pages` - Page components (Home, About)
- `/src/layout` - Layout and navigation
- `/server.ts` - Express SSR server
- `/entry-server.tsx` - SSR entry point


## Customization

Feel free to extend routing, add more pages, or customize Fluent 2 components as needed.
