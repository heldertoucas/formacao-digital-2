# Guide: Coding Style Guide

A consistent code style is essential for readability and maintainability. This document outlines the primary conventions to follow in this project.

### Formatting

We use **Prettier** as our automatic code formatter to ensure a consistent style across the entire codebase.

While a pre-commit hook is not yet configured, it is **highly recommended** that you install the Prettier extension for your IDE and enable the "format on save" setting. This will automatically format your files each time you save them.

### Naming Conventions

*   **Components:** `PascalCase` (e.g., `CourseCard`, `SiteHeader`).
*   **Files:** `PascalCase` for components (`CourseCard.tsx`), `camelCase` for other files (`useQuizState.ts`).
*   **Variables & Functions:** `camelCase` (e.g., `const userScore`, `function formatTime()`).
*   **Custom Hooks:** Must start with `use` (`useTimer`, `useDisclosure`).
*   **TypeScript Types/Interfaces:** `PascalCase` (e.g., `interface CourseProps`).

### TypeScript Best Practices

*   **Type Everything:** Avoid the `any` type whenever possible. If a type is unknown, prefer `unknown` and perform type checking.
*   **Props Interfaces:** Define a `Props` interface for every component (e.g., `interface CourseCardProps`).
*   **Shared Types:** If a type is used across multiple parts of the application (e.g., a `User` or `Course` object), define it once in `src/lib/types.ts` and import it from there.
