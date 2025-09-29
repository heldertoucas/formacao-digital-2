# PRD: Migration to a Modular Next.js + Mantine UI Stack

## 1. Introduction & Overview

This document outlines the requirements for the creation of the "Formação Digital Lisboa" project. The goal is to create a simple and lean build system by moving to a **single, modular Next.js application**.

Project's new architecture will retain the principles of reusability and separation of concerns of the current project by using a well-defined internal folder structure. The UI will be rebuilt using the **Mantine UI** component library. This PRD will guide the creation of a `migration/` folder containing all necessary documentation for an AI assistant to execute this migration from scratch.

## 2. Goals

*   **Simplify Build System:** Remove the complexity of Turborepo of the current project by consolidating the project into a single Next.js application.
*   **Establish a Scalable Internal Architecture:** Implement a clear, "internally modular" folder structure (`src/components`, `src/lib`, `src/features`) that promotes code reuse and organization.
*   **Modernize the UI Kit:** Replace the current Tailwind/DaisyUI implementation with the comprehensive component set from Mantine UI.
*   **Create AI-First Documentation:** Produce a new, detailed `GEMINI.md` and a step-by-step task list tailored to the new architecture.
*   **Incorporate Past Learnings:** Ensure the new setup process accounts for all lessons learned regarding the Google Cloud Shell environment.

## 3. Functional Requirements

### 3.1. Project Setup Guide

A step-by-step guide will be created to instruct the user on how to set up the new project environment manually. This guide will be the primary output of the task list.

### 3.2. Developer Documentation

A new `GEMINI.md` file will be created in the `formacao-digital-2` directory. This file will serve as the primary guide for any developer or AI assistant working on the new codebase. Its content is defined below.

```markdown
# Gemini CLI Project Context: Digital Literacy Portugal (Modular Next.js)

## 1. Session Start Protocol

**This is the first action you must take at the beginning of every new session.**
1.  This file **must** serve as the complete, standalone guide for an AI assistant working on the new codebase.

## 2. Project Overview & Mission

This is a **modular Next.js application** for the "Formação Digital Lisboa" platform. Our mission is to create a cohesive ecosystem for three core programs: "Passaporte Competências Digitais," "Futuro Digital," and "IA para Todos."

## 3. Core Technologies

*   **Framework:** Next.js with App Router
*   **UI & Styling:** Mantine UI
*   **Language:** TypeScript

## 4. Folder Structure (Internal Modularity)

This project uses a standard Next.js setup with a specific internal structure to ensure code is modular and reusable.

*   `src/app/`: **FOR ROUTING ONLY.** This directory defines the URL structure. Page files here should be simple compositions of components from other directories.
*   `src/components/`: **FOR SHARED UI.** This is our internal UI library. All stateless, reusable components (Buttons, Cards, Layouts) live here.
*   `src/lib/`: **FOR SHARED LOGIC.** All reusable, non-visual code, such as custom hooks, utility functions, and type definitions, lives here.
*   `src/features/`: **FOR PROGRAM-SPECIFIC CODE.** Code that is only used for one program (e.g., "IA para Todos") goes here. This keeps program-specific logic isolated.

## 5. CRITICAL INSTRUCTIONS: The Interactive Workflow Protocol

**For every development request, you MUST follow this three-step process: Plan -> Approve -> Execute.**
(The protocol details remain the same as stated in the current project's gemini.md file).

## 6. Development Workflows

*   **Creating a new Page:** Create a new folder and `page.tsx` file inside `src/app/`.
*   **Creating a new Shared Component:** Create a new file in `src/components/`.
*   **Creating a new Feature-Specific Component:** Create a new file inside the appropriate `src/features/[program-name]/` directory.
*   **Styling:** Use Mantine's theming system (`MantineProvider`), `createStyles` hook, or `sx` prop.
```

### 3.3. Task List (`tasks-next-migration.md`)

A detailed task file will be created in the `dev-ops/tasks/` directory of the new project. This file will be a step-by-step guide for the user to follow, containing all the necessary commands and code snippets to build the new application from scratch.

### 3.4. Shell Script (`setup-cloud-shell.sh`)

A `setup-cloud-shell.sh` script will be provided. This script will contain the necessary commands to configure the Google Cloud Shell environment with the required tools (NVM, pnpm, Git).
