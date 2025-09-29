# Guide: Testing Strategy

We follow a balanced testing strategy to ensure our application is reliable, correct, and robust. Our approach is based on the "testing pyramid," which emphasizes a healthy mix of different types of tests.

### 1. Unit & Integration Tests (Base of the Pyramid)

*   **Purpose:** To verify that individual functions, hooks, and components work correctly in isolation.
*   **Proposed Tool:** **Vitest** with **React Testing Library**. This provides a fast, modern test runner and utilities that encourage good testing practices.
*   **Where:** Test files will be co-located with the source files (e.g., `Button.test.tsx` next to `Button.tsx` in `src/components/common/`).
*   **Status:** Not yet implemented. The immediate next step is to install and configure these tools.

### 2. Component Visual Testing (Manual)

*   **Purpose:** To manually verify that UI components render correctly across different states and props.
*   **Tool:** Our internal **Component Library page**.
*   **Where:** The page at `/dev/components`, which is only available in the development environment.
*   **Workflow:** When developing a new component, add it to this page to visually inspect its appearance and behavior before using it in the main application.

### 3. End-to-End (E2E) Tests (Top of the Pyramid)

*   **Purpose:** To verify that critical user flows work correctly in a real browser environment from start to finish.
*   **Proposed Tool:** **Playwright**.
*   **Where:** In a dedicated `e2e/` folder at the project root.
*   **Status:** To be implemented later in the project lifecycle. We will focus E2E tests on the most critical user paths only, such as user registration or completing a core module.
