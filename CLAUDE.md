# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16.1.1 project using the App Router, React 19.2, TypeScript, and Tailwind CSS 4. The project appears to be a landing page for "Alticore Gemini" - a semiconductor/chip-related product or service with a single-page application architecture.

## Commands

- DO NOT RUN `npm run build` unless asked

### Development

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Architecture

### Framework Setup

- **Next.js 16**: Uses App Router (not Pages Router)
- **TypeScript**: Strict mode enabled with `jsx: "react-jsx"` (not "preserve")
- **Styling**: Tailwind CSS 4 with PostCSS plugin (`@tailwindcss/postcss`)
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`
- **Icons**: lucide-react for all iconography

### Path Aliases

- `@/*` maps to root directory (defined in tsconfig.json)

### Application Structure

- **Single-page architecture**: The main content is in `app/page.tsx` which is a large client component ("use client")
- **Root layout**: `app/layout.tsx` sets up fonts, metadata, and global styles
- **Global styles**: `app/globals.css` uses Tailwind's new `@import "tailwindcss"` syntax (v4 style)
- **Component pattern**: The app uses inline component definitions within `app/page.tsx` rather than separate component files

### Styling Approach

- Tailwind CSS 4 with inline theme configuration in `globals.css` using `@theme inline`
- Dark mode support via `prefers-color-scheme`
- Custom CSS properties for background/foreground colors
- Heavy use of utility-first classes with custom color schemes (cyan/slate palette)
- Shadow effects with custom rgba values for glowing/neon effects

### TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Module resolution: "bundler" (Next.js optimized)
- JSX: "react-jsx" (automatic runtime)
- No emit (Next.js handles compilation)

### ESLint Configuration

- Uses Next.js ESLint config with TypeScript support
- Configured via flat config system (`eslint.config.mjs`)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Technical Details

### Client Components

The main page (`app/page.tsx`) is a client component that uses React hooks (useState, useEffect). When adding new pages or components, determine whether they need client-side interactivity before adding "use client".

### Component Organization

Currently, all components are defined inline within `page.tsx`. If refactoring, consider:

- Creating a `components/` directory for shared components
- Keeping Button, SectionHeading, and other reusable components separate
- Maintaining the current theming and styling patterns

### Styling Patterns

- Use Tailwind utility classes extensively
- Follow the cyan (`cyan-500`, `cyan-400`) and slate (`slate-900`, `slate-300`) color scheme
- Apply glow effects using `shadow-[0_0_Xpx_rgba(...)]` pattern
- Use `font-mono` for technical/code-related elements

### Products and Designs

There are 3 products in this app that have the following design requirements. When writing about these products, the names should always be written as it is below and never with full uppercase.

- AltiCoreMCU: base color is tailwind's blue-400
- AltiCoreSW: base color is tailwind's teal-400
- AltiCoreHDL: base color is tailwind's amber-500
