# SDD Task Breakdown - Landing Forge (`forge-landing/`)

Track progress of tasks following Specification-Driven Development guidelines.

---

## Milestone 1: SDD Foundation & Configuration
- [x] Analyze Figma Node `5:4` (`landing-page`).
- [x] Create `forge-landing/.spec/constitution.md`.
- [x] Create `forge-landing/.spec/specs/landing-forge-spec.md`.
- [x] Create `forge-landing/.spec/tasks.md`.

---

## Milestone 2: Next.js Project & Design System Setup
- [x] Initialize Next.js 15 project inside `forge-landing/`.
- [x] Install `lucide-react`, `clsx`, `tailwind-merge`.
- [x] Configure Tailwind theme colors (`#070f1e`, `#0b192c`, `#10b981`, `#94a3b8`, `#475569`).
- [x] Create UI primitives and structure.

---

## Milestone 3: Landing Page Component Implementation
- [x] Implement `Navbar` component.
- [x] Implement `HeroSection` component.
- [x] Implement `ProcessSection` component.
- [x] Implement `SolutionsSection` component.
- [x] Implement `StandardsSection` component.
- [x] Implement `LeadCaptureSection` form component.
- [x] Implement `FooterSection` component.

---

## Milestone 4: Verification & Anti-Spam Security
- [x] Implement 3-layer anti-spam security (Honeypot, velocity check, cooldown rate-limiter).
- [x] Implement dynamic favicons (`icon.tsx`, `apple-icon.tsx`).
- [x] Verify zero console errors and clean build (`npx next build`).

---

## Milestone 5: Refinements & Granular Commits (Current)
- [x] **Task 5.1 (Commit 1)**: Remove Facebook, Twitter, and LinkedIn links temporarily from Footer.
- [x] **Task 5.2 (Commit 2)**: Add 2 additional phone number fields in Contacto Directo config & footer.
- [x] **Task 5.3 (Commit 3)**: Remove all NDA mentions across Hero, Process, and Lead Capture sections.
- [x] **Task 5.4 (Commit 4)**: Replace "Marketing Digital" with "Desarrollo App Móvil" in the service selector.
