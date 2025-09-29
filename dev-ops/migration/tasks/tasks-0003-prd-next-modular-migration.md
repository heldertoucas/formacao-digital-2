## Relevant Files

- `src/app/layout.tsx` - To be modified for Mantine UI integration and global layout structure.
- `src/app/page.tsx` - To be refactored to use components from the new modular structure.
- `src/app/globals.css` - To be cleared of default styles.
- `src/app/passaporte/page.tsx` - New page for the "Passaporte" program.
- `src/app/futuro/page.tsx` - New page for the "Futuro" program.
- `src/app/ia/page.tsx` - New page for the "IA" program.
- `src/components/layout/SiteHeader.tsx` - New global header component.
- `src/components/layout/SiteFooter.tsx` - New global footer component.
- `src/components/common/Welcome.tsx` - New shared component for the main landing page.
- `GEMINI.md` - New developer guidelines file at the project root.

### Notes

- This task list focuses on establishing the foundational structure and key files. Unit tests should be added in a subsequent phase.
- To run the development server, use `npm run dev`.

## Tasks

- [ ] 1.0 Setup Core Project Structure
  - [ ] 1.1 Create the following directories inside `src/components`: `common`, `layout`, `passaporte`, `futuro`, `ia`.
  - [ ] 1.2 Create the following directories inside `src/app`: `passaporte`, `futuro`, `ia`.
  - [ ] 1.3 Create the `src/lib` directory for future shared logic.
- [ ] 2.0 Integrate Mantine UI and Establish Global Layout
  - [ ] 2.1 Add the Mantine CSS import (`@mantine/core/styles.css`) to `src/app/layout.tsx`.
  - [ ] 2.2 In `src/app/layout.tsx`, import `MantineProvider` and wrap the `<body>`'s children with it.
  - [ ] 2.3 Create a placeholder `SiteHeader.tsx` component in `src/components/layout/`.
  - [ ] 2.4 Create a placeholder `SiteFooter.tsx` component in `src/components/layout/`.
  - [ ] 2.5 Add the new `SiteHeader` and `SiteFooter` components to the root `layout.tsx`.
- [ ] 3.0 Establish Program Routes and Placeholder Pages
  - [ ] 3.1 Create `src/app/passaporte/page.tsx` with a simple heading for the program.
  - [ ] 3.2 Create `src/app/futuro/page.tsx` with a simple heading for the program.
  - [ ] 3.3 Create `src/app/ia/page.tsx` with a simple heading for the program.
- [ ] 4.0 Refactor Home Page to Align with Modular Structure
  - [ ] 4.1 Delete all default styles from `src/app/globals.css`.
  - [ ] 4.2 Remove the default boilerplate JSX from `src/app/page.tsx`.
  - [ ] 4.3 Create a `Welcome.tsx` component in `src/components/common/` for the portal's landing page.
  - [ ] 4.4 Import and render the `Welcome` component in `src/app/page.tsx`.
- [ ] 5.0 Create Developer Guidelines (`GEMINI.md`)
  - [ ] 5.1 Create the `GEMINI.md` file in the project root.
  - [ ] 5.2 Copy the specified content from the PRD into the new `GEMINI.md` file.
