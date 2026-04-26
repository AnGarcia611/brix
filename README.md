# BRIX — NSR-10 Building Code Assistant

Interactive consultation tool for Colombia's NSR-10 seismic building code. Built with React 19 + Vite + Tailwind CSS v4.

**Live:** https://angarcia611.github.io/brix/

---

## Stack

| Tool            | Version               |
| --------------- | --------------------- |
| React           | 19                    |
| Vite            | 6                     |
| Tailwind CSS    | v4                    |
| Motion (Framer) | 12                    |
| Lucide React    | latest                |
| Runtime         | [Bun](https://bun.sh) |

## Getting started

> **Requires [Bun](https://bun.sh).** Node/npm/pnpm are not supported.

```bash
git clone https://github.com/AnGarcia611/brix.git
cd brix
bun install
bun run dev
```

App runs at `http://localhost:5173`.

## Scripts

```bash
bun run dev     # dev server with HMR
bun run build   # production build → dist/
```

## Project structure

```
src/
  app/
    App.tsx              # root — screen state machine (welcome → direct|guided → result)
    components/
      Shell.tsx          # layout wrapper + navbar
      Welcome.tsx        # landing screen
      DirectSearch.tsx   # free-text article search
      GuidedSearch.tsx   # step-by-step query flow
      ArticleView.tsx    # consultation result
      CrossRefPanel.tsx  # related articles panel
      Ambient.tsx        # animated background gradient
      brix-ui.tsx        # design system (Button, Chip, Card, Stepper, Tag)
  styles/
    theme.css            # brand color tokens (@theme)
    tailwind.css         # Tailwind entry
    index.css            # global base styles
```

## Screens

La app usa un state machine en `App.tsx` (`screen` state) en lugar de un router. Las pantallas principales son:

| Componente         | Screen key  | Descripción                                                          |
| ------------------ | ----------- | -------------------------------------------------------------------- |
| `Welcome.tsx`      | `"welcome"` | Pantalla de inicio; el usuario elige entre los dos modos de consulta |
| `DirectSearch.tsx` | `"direct"`  | Búsqueda directa por texto o código de artículo                      |
| `GuidedSearch.tsx` | `"guided"`  | Flujo guiado paso a paso por preguntas                               |
| `ArticleView.tsx`  | `"result"`  | Muestra el resultado de la consulta                                  |

Flujo: `Welcome` → `DirectSearch` o `Guided` → `Result`.

Componentes de soporte (no son pantallas):

| Componente          | Rol                                                         |
| ------------------- | ----------------------------------------------------------- |
| `Shell.tsx`         | Layout envolvente (header, fondo, navegación)               |
| `Ambient.tsx`       | Efecto de gradiente animado en el fondo                     |
| `CrossRefPanel.tsx` | Panel auxiliar de referencias cruzadas                      |
| `brix-ui.tsx`       | Sistema de diseño propio (Button, Chip, Card, Stepper, Tag) |

## Design tokens

Brand colors live in `src/styles/theme.css` as Tailwind `@theme` tokens:

```css
--color-brand-ink      /* #22184A — primary text */
--color-brand-accent   /* #3F369F — interactive elements */
--color-brand-violet   /* #8B3DFF */
--color-brand-cyan     /* #14CEDB */
--color-brand-green    /* #0DE77A */
```

Use them as Tailwind classes: `text-brand-ink`, `bg-brand-accent`, `border-brand-green`, etc.

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.
