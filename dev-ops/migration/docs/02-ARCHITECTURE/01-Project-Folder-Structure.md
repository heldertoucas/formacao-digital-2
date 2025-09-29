# Project Folder Structure

This document is the definitive map of our repository. Understanding the purpose of each folder is key to knowing where to find code and where to place new files.

### Repository Map

This is a simplified view of our Next.js project structure.

```
formacao-digital-2/
|-- src/
|   |-- app/
|   |   |-- passaporte/
|   |   |-- futuro/
|   |   |-- ia/
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |
|   |-- components/
|   |   |-- common/
|   |   |-- layout/
|   |
|   |-- lib/
|
|-- public/
|-- .pnpmfile.cjs
|-- package.json
|-- next.config.mjs
...
```

### Directory Explanations

#### `src/app/`
This is the heart of our Next.js application, using the App Router.
*   **`layout.tsx`**: The root layout for the entire application.
*   **`page.tsx`**: The main landing page.
*   **/passaporte, /futuro, /ia**: Each of these folders represents a top-level route for one of our core programs.

#### `src/components/`
This directory is for all our reusable React components.
*   **`common/`**: For simple, generic components that can be used anywhere (e.g., `Button`, `Card`).
*   **`layout/`**: For major layout components (e.g., `Header`, `Footer`, `Sidebar`).
*   We also create folders named after programs (e.g., `passaporte/`) for components that are specific to that program.

#### `src/lib/`
A folder for shared, non-visual code. This is the place for utility functions, custom React hooks, and other shared logic.

#### `public/`
This directory is for static assets that are served directly, such as images, fonts, and other files.