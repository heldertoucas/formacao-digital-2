## Relevant Files

- `packages/ui/src/organisms/SiteHeader/SiteHeader.tsx` - The main component file for the site header.
- `packages/ui/src/organisms/SiteHeader/SiteHeader.stories.tsx` - The Storybook file for developing and testing the `SiteHeader`.
- `packages/ui/src/organisms/SiteFooter/SiteFooter.tsx` - The main component file for the site footer.
- `packages/ui/src/organisms/SiteFooter/SiteFooter.stories.tsx` - The Storybook file for developing and testing the `SiteFooter`.
- `packages/ui/src/atoms/Button/Button.tsx` - The component file for a reusable button atom.
- `packages/ui/src/atoms/Button/Button.stories.tsx` - The Storybook file for the `Button` component.
- `packages/ui/src/atoms/Input/Input.tsx` - The component file for a reusable input atom.
- `packages/ui/src/atoms/Input/Input.stories.tsx` - The Storybook file for the `Input` component.
- `packages/ui/src/atoms/Card/Card.tsx` - The component file for a reusable card atom.
- `packages/ui/src/atoms/Card/Card.stories.tsx` - The Storybook file for the `Card` component.

### Notes

- All new components will be created within the `packages/ui` directory, following the Atomic Design structure (`atoms`, `molecules`, `organisms`).
- Each component will have a corresponding `.stories.tsx` file for isolated development and testing in Storybook.
- We will use `pnpm --filter @repo/ui storybook` to run the Storybook development server.

## Tasks

- [x] 1.0 Create the `SiteHeader` Organism
  - [x] 1.1 Create the directory `packages/ui/src/organisms/SiteHeader`.
  - [x] 1.2 Create the component file `SiteHeader.tsx` with a basic implementation, including a placeholder title and navigation links.
  - [x] 1.3 Create the story file `SiteHeader.stories.tsx` with a default story.
  - [x] 1.4 Add a basic interaction test to the story file to ensure links are rendered.
  - [x] 1.5 Create and/or update `packages/ui/src/organisms/index.ts` to export the `SiteHeader` component.
- [x] 2.0 Create the `SiteFooter` Organism
  - [x] 2.1 Create the directory `packages/ui/src/organisms/SiteFooter`.
  - [x] 2.2 Create the component file `SiteFooter.tsx` with a copyright notice and placeholder social media links.
  - [x] 2.3 Create the story file `SiteFooter.stories.tsx` with a default story.
  - [x] 2.4 Update `packages/ui/src/organisms/index.ts` to export the `SiteFooter` component.
- [x] 3.0 Develop the Core `Button` Atom
  - [x] 3.1 Create the directory `packages/ui/src/atoms/Button`.
  - [x] 3.2 Create the component file `Button.tsx`, implementing a button with `primary` and `secondary` variants using Daisy UI classes.
  - [x] 3.3 Create the story file `Button.stories.tsx`.
  - [x] 3.4 Add stories for the `primary` and `secondary` variants.
  - [x] 3.5 Add an interaction test to the story to verify the `onClick` handler is called.
  - [x] 3.6 Create and/or update `packages/ui/src/atoms/index.ts` to export the `Button` component.
- [x] 4.0 Develop the Core `Input` Atom
  - [x] 4.1 Create the directory `packages/ui/src/atoms/Input`.
  - [x] 4.2 Create the component file `Input.tsx` for a basic text input.
  - [x] 4.3 Create the story file `Input.stories.tsx`.
  - [x] 4.4 Add stories for a default input and a disabled input.
  - [x] 4.5 Update `packages/ui/src/atoms/index.ts` to export the `Input` component.
- [x] 5.0 Develop the Core `Card` Atom
  - [x] 5.1 Create the directory `packages/ui/src/atoms/Card`.
  - [x] 5.2 Create the component file `Card.tsx` that accepts `title` and `children` props.
  - [x] 5.3 Create the story file `Card.stories.tsx`.
  - [x] 5.4 Add a story for a basic card and a card with a title.
  - [x] 5.5 Update `packages/ui/src/atoms/index.ts` to export the `Card` component.