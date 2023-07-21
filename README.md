# osuc.dev

Sitio web oficial de Open Source UC

## Tech Stack
- Vite
- SvelteKit
- TailwindCSS
- pnpm

## Desarrollo

Copia el archivo `.env.example` a `.env` y reemplaza los valores con los tuyos. No te preocupes, este archivo está ignorado por git.

Instala las dependencias con `pnpm install`

Inicia el servidor de desarrollo con `pnpm run dev`

O empieza el servidor y abre la app en una nueva pestaña del navegador con `pnpm run dev -- --open`

Si se usa otro gestor de paquetes, no subas los cambios al `package-lock.json` o `yarn.lock`

## Producción

Haz un build de la app con `pnpm run build`