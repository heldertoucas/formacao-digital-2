# PRD: Migration to a Leaner Stack (Vite + Mantine UI)

## 1. Introduction & Overview

This document outlines the requirements for a strategic migration of the "Digital Literacy Portugal" portal. The project will be transitioned from its current Turborepo/Next.js/DaisyUI stack to a simpler, more streamlined stack using **Vite, React, and the Mantine UI component library**.

*(**Note on Technology:** The request mentioned Next.js and Vite. As these are competing build tools, this plan assumes the goal is to **replace Next.js with Vite** to achieve a "leaner stack," as Vite is a build tool, not a full-stack framework.)*

## 2. Goals

*   **Simplify Architecture:** Decommission the Turborepo monorepo structure in favor of a single-package application for the main portal.
*   **Modernize the UI Kit:** Replace the Tailwind/DaisyUI components with the comprehensive and feature-rich components provided by Mantine UI.
*   **Improve Developer Experience:** Leverage Vite's famously fast development server and simple configuration.
*   **Create AI-Centric Documentation:** Produce a new, detailed `GEMINI.md` file specifically tailored to the Vite + Mantine stack, enabling efficient AI-assisted development going forward.
*   **Archive Legacy Code:** Safely move the old monorepo structure into an archive folder without deleting it.

## 3. Functional Requirements

### 3.1. Project Migration & Restructuring

1.  **New Project Scaffolding:**
    *   A new directory named `portal-vite` **must** be created in the project root.
    *   Inside `portal-vite`, a new project **must** be initialized using the Vite `react-ts` template.
    *   Mantine UI and its related dependencies (e.g., `react-router-dom` for routing) **must** be installed.

2.  **Content & Feature Parity:**
    *   The content and layout of the existing landing page (`apps/portal/src/app/page.tsx`) **must** be recreated in the new Vite application.
    *   This includes the Header, Hero (with the three program cards), About, Testimonials, and Contact sections.
    *   The UI **must** be rebuilt using appropriate components from the Mantine UI library (e.g., `Mantine.Card`, `Mantine.Button`, `Mantine.AppShell`).
    *   A client-side routing solution (`react-router-dom`) **must** be implemented to handle the routes: `/`, `/passaporte`, `/futuro`, and `/ia`.
    *   A custom 404 "Not Found" page **must** be created.

3.  **Legacy Code Archival:**
    *   A new directory named `_legacy` **must** be created in the project root.
    *   The following directories and files **must** be moved into `_legacy`:
        *   `apps/`
        *   `packages/`
        *   `turbo.json`
        *   `pnpm-workspace.yaml`
        *   The original `GEMINI.md`

### 3.2. AI Documentation (`GEMINI.md` for the New Stack)

1.  A new `GEMINI.md` file **must** be created inside the `portal-vite` directory.
2.  This file **must** serve as the complete, standalone guide for an AI assistant working on the new codebase.
3.  It **must** include the following sections:
    *   **Project Overview:** A description of the project's mission and the new Vite + Mantine stack.
    *   **Core Technologies:** A list including Vite, React, TypeScript, and Mantine UI.
    *   **Folder Structure:** A clear map of the new, simpler Vite project structure (e.g., `src/pages`, `src/components`).
    *   **Development Workflow:**
        *   Command to start the dev server (`pnpm dev`).
        *   Instructions for creating new pages and components.
        *   The "Plan -> Approve -> Execute" protocol should be carried over.
    *   **Styling Guide:** Instructions on how to use Mantine's theming system (`MantineProvider`), `createStyles` hook, or other styling conventions.
    *   **Component Guide:** Brief examples of how to use common Mantine components like `Card`, `Button`, and `Grid`.

## 4. Non-Goals (Out of Scope)

*   This migration does **not** include rebuilding any of the `mini-apps` or program-specific features from the old `packages/` directory.
*   No new visual designs or features will be introduced. The goal is to replicate the existing landing page with a new technology stack.

## 5. Success Metrics & Acceptance Criteria

1.  The old project structure is successfully moved into the `_legacy` directory.
2.  A new Vite project exists in `portal-vite` and runs successfully on port 8080 in Google Cloud Shell via `pnpm dev`.
3.  The new landing page is visually and functionally equivalent to the original.
4.  The new `GEMINI.md` file is created and contains all the required sections with sufficient detail for an AI to begin work.
