# Workflow: Using Gemini CLI

To accelerate our development process and maintain consistency, we use the **Gemini CLI** as an intelligent coding assistant. This guide explains how to use it effectively within our project.

### Project Context

Gemini CLI has been provided with the full context of our project, including our Next.js architecture, Mantine component library, and our established coding conventions. It will follow these rules when generating or modifying code.

**The most important rule:** When you ask Gemini to create a new component, it will automatically place the file in the correct `src/components/` sub-folder and add it to our "Component Library" page for you to review.

### Standard Prompts

While you can interact with Gemini conversationally, using standardized prompts for common tasks ensures predictable and consistent results.

**1. To create a new common component:**
```bash
gemini "create a new common component called 'Icon'"
```

  * **What it does:** Creates `Icon.tsx` inside `src/components/common/` and adds it to the `dev/components` page for review.

**2. To create a new Mini-App:**

```bash
gemini "create a new mini-app called 'MemoryGame'"
```

  * **What it does:** Scaffolds the `MemoryGame` folder inside `src/components/mini-apps/` and adds it to the `dev/components` page.

**3. To create a shared utility function:**

```bash
gemini "create a utility function in 'src/lib' to format a date string"
```

  * **What it does:** Adds a new function to a file within `src/lib/`.

**4. To refactor a component:**

```bash
gemini "refactor this component to use our 'useTimer' hook from 'src/lib/hooks'"
```

  * **What it does:** Reads the provided code and intelligently rewrites it according to your instructions, following our project's conventions.
