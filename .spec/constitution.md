# Project Constitution - Landing Forge (SDD Framework)

This document establishes the binding rules, architectural guidelines, quality standards, and design system laws for the **Landing Forge** codebase inside `forge-landing/`.

---

## 1. Core Principles

1. **Specification First (SDD)**: No production code shall be written without a corresponding specification entry and active task in `.spec/`.
2. **Figma Fidelity**: Component visual layouts, color values, typography, and spacing must strictly align with the canonical Figma node `5:4` (`landing-page`).
3. **Type Safety & Zero Warnings**: All code must pass strict TypeScript checks (`tsc --noEmit`) and ESLint without warnings or suppressed errors.
4. **Performance & Accessibility (a11y)**: All interactive elements must be keyboard-navigable, screen-reader friendly, and achieve 95+ performance metrics.

---

## 2. Tech Stack & Library Standards

- **Framework**: Next.js 15 (App Router, Server & Client Components separation).
- **Styling**: Tailwind CSS with custom design tokens.
- **Icons**: `lucide-react` icons matching the Figma specs (`terminal`, `shield-check`, `file-code-2`, `message-square-text`, `clock`, `file-text`, `chevron-down`, `arrow-right`, `mail`, `phone`).
- **Component Architecture**: Atomic UI components in `@/components/ui`, section compositions in `@/components/sections`.

---

## 3. Design System & Theme Rules

- **Palette**:
  - `bg-dark-primary`: `#070f1e`
  - `bg-dark-secondary`: `#0b192c`
  - `accent-emerald`: `#10b981`
  - `text-light`: `#ffffff`
  - `text-muted`: `#94a3b8`
  - `text-dark`: `#0b192c`
  - `text-secondary`: `#475569`
  - `card-bg`: `#ffffff` / `#f8fafc`
- **Breakpoints**: Standard Tailwind breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

---

## 4. SDD Workflow & Governance

1. **Spec Amendments**: Any scope change must be submitted as an edit to `.spec/specs/landing-forge-spec.md`.
2. **Task Completion**: Tasks in `.spec/tasks.md` must be marked as completed `[x]` only after automated build and visual verification pass.
