# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the landing page for "Gran Foro Colombia 2025" - a BTG Pactual event landing page built with Astro and styled with TailwindCSS v4.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at `http://localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture & Structure

### Core Technologies
- **Astro 5.13.5**: Static site generator with component-based architecture
- **TailwindCSS 4.1.13**: Utility-first CSS framework with Vite plugin integration
- **TypeScript**: Strict configuration with path aliases

### Project Structure
```
src/
├── layouts/           # Page layouts (layout.astro)
├── pages/            # Route pages (index.astro)
├── sections/         # Reusable page sections (Header.astro, Footer.astro)
├── assets/           # Static assets (SVGs, images)
└── styles/           # Global styles and theme definitions
```

### Key Architectural Patterns

**Component-Based Sections**: The main page is composed of reusable sections (Header, Footer) that can be easily maintained and modified independently.

**Theme System**: Custom TailwindCSS theme with BTG brand colors defined in `src/styles/global.css`:
- `--color-blue-1` through `--color-blue-7`: Brand color palette from light (#D2E5FF) to dark (#05132A)

**Typography**: Custom BTG Pactual Office font family with multiple weights (Light 300, Regular 400, Semibold 600, Bold 700) loaded via `@font-face`.

**Path Aliases**: TypeScript configured with `@/*` alias pointing to `./src/*` for clean imports.

## Brand Guidelines

### Colors
The project uses a strict blue color palette defined in the theme:
- Primary background: `--color-blue-5` (#195AB4)
- Content background: `--color-blue-6` (#0B2859)
- Accent colors: `--color-blue-2` (#87BAFF) and `--color-blue-3` (#549CFF)

### Typography
- Font family: "BTG Pactual Office" (custom corporate font)
- Base font size: 16px
- Base line height: 1.125rem
- Font weights: 300 (light), 400 (regular), 600 (semibold), bold

## Development Notes

### Asset Management
- SVG icons are imported directly as components
- Images use Astro's built-in `<Image>` component for optimization
- Static assets (fonts, favicons) are served from `/public/`

### Styling Approach
- Uses TailwindCSS v4 with Vite plugin integration
- Custom theme colors are defined and used consistently
- Responsive design with `lg:` breakpoint modifiers
- Font loading optimized with `font-display: swap`

### Content Structure
The landing page follows a simple structure:
1. **Header**: BTG logo and event title ("Gran Foro Colombia 2025")
2. **Footer**: Corporate information, social links, and regulatory compliance text

### Social Media Links
The footer includes official BTG Pactual Colombia social media channels:
- LinkedIn: https://www.linkedin.com/company/btg-pactual-col/
- Instagram: https://www.instagram.com/btgpactualcolombia/
- YouTube: https://www.youtube.com/@btgpactualcol
- Spotify: https://open.spotify.com/show/6022jBYastUKXWxZjwK7K2

### Legal Compliance
The footer includes required financial regulatory information for Colombian operations, including Superintendencia Financiera de Colombia oversight notice.
