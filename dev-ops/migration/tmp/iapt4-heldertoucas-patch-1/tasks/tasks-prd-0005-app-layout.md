## Relevant Files

- `components/layout/AppLayout.tsx` - New file. This will be the single, persistent layout component for the entire application.
- `components/App.tsx` - To be modified. Will be refactored to use `AppLayout` as the main wrapper for the application.
- `components/AppRouter.tsx` - To be modified. All layout-specific logic will be removed, simplifying it to only handle page component selection.
- `components/layout/InternalPageLayout.tsx` - To be deprecated. Its usage will be entirely replaced by `AppLayout.tsx`.
- `components/layout/Navbar.tsx` - Existing component (from Phase 1) that will be consumed by `AppLayout.tsx`.
- `components/Footer.tsx` - Existing component that will be consumed by `AppLayout.tsx`.

### Notes

- This task list assumes that the unified `Navbar.tsx` component from Phase 1 (`prd-0004-unified-navbar`) has been completed and is ready for use.
- The core of this refactor is changing how the application is composed, moving from a router that switches layouts to a single layout that contains a router.

## Tasks

- [x] **1.0 Create the new `AppLayout.tsx` component.**
  - [x] 1.1 Create the new file at `components/layout/AppLayout.tsx`.
  - [x] 1.2 Define the component's props interface to accept `children: React.ReactNode` and `route: string`.
  - [x] 1.3 Implement the JSX structure to render the `<Navbar>`, the `{children}` prop, and the `<Footer>` in the correct order.
  - [x] 1.4 Add the logic inside the `AppLayout` component to determine the `navbarVariant` (either `'landing'` or `'internal'`) based on the `route` prop.
  - [x] 1.5 Pass the calculated `navbarVariant` and any other necessary props to the `<Navbar />` component.

- [x] **2.0 Refactor the application's root (`App.tsx`) and router (`AppRouter.tsx`) to use the new layout.**
  - [x] 2.1 In `App.tsx`, modify the main `return` statement. Wrap the `<AppRouter />` component with your new `<AppLayout />`.
  - [x] 2.2 Pass the `route` state from `App.tsx` as a prop to `<AppLayout />`.
  - [x] 2.3 In `AppRouter.tsx`, remove the conditional `if (isHomePage)` block and all related layout logic.
  - [x] 2.4 Remove the import for `InternalPageLayout.tsx`.
  - [x] 2.5 Simplify the `AppRouter.tsx` component so that its only job is to find the correct `PageComponent` and return it. The final return statement should look something like `<PageComponent navigateTo={navigateTo} pages={pages} activePath={route} />`.

- [x] **3.0 Verify the fix and ensure the old layout component is fully deprecated.**
  - [x] 3.1 Run the application locally.
  - [x] 3.2 Navigate from the landing page (`#/`) to an internal page (e.g., `#/prompt-factory`) and back again several times.
  - [x] 3.3 Confirm that the "double navbar" and layout corruption bugs are gone and the transition is visually seamless.
  - [x] 3.4 Confirm that the `landing` variant of the `Navbar` is displayed on the home page and the `internal` variant is displayed on all other pages.
  - [x] 3.5 Perform a project-wide search for the string `InternalPageLayout` to confirm it is no longer being imported or used anywhere in the application.
