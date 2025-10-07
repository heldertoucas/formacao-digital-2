## Relevant Files

- `src/components/ia-ported/` - New directory to house all adapted components from the 'iapt4' project.
- `src/lib/hooks/` - Existing directory where ported custom hooks (e.g., `useAnimatedSection.ts`, `useManifestoData.ts`) will be placed.
- `src/services/` - New directory for ported backend service logic (e.g., `supabaseClient.ts`, `prompt-factory-api.ts`).
- `src/app/dev/ia-ported/page.tsx` - The new component library page that will be created to showcase and test all ported components.
- `package.json` - May require adding new dependencies from the source project (e.g., `remixicon`, `@supabase/supabase-js`).
- `.env.local` - Will need to be created or updated with Supabase credentials.

### Notes

- **Adaptation Strategy:** The core task is to refactor components from Tailwind CSS to Mantine UI. This involves replacing `className` utilities with Mantine components and props (`<Group>`, `<Stack>`, `p`, `shadow`, `radius`, etc.). Custom styles will use CSS Modules.
- **Backend Connection:** This project requires connecting to the same Supabase instance as the source project. Ensure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are available as environment variables.
- **Navigation:** All `<a>` tags and programmatic navigation must be updated to use the Next.js `<Link>` component.

## Tasks

- [x] 1.0 **Foundational Scaffolding & Utility Porting**
  - [x] 1.1 Create the main directory for all ported components at `src/components/ia-ported/`.
  - [x] 1.2 Inside `ia-ported/`, create sub-directories for organization: `ui`, `layout`, `learning`, `heros`, `illustrations`, `showcase`, and `manifesto-pilares`.
  - [x] 1.3 Port the `<RemixIcon />` component to `src/components/ia-ported/ui/`.
  - [x] 1.4 Add the Remix Icon CSS link to the root layout (`src/app/layout.tsx`).
  - [x] 1.5 Port the utility hooks (`useAnimatedSection.ts`, `useCountUp.ts`, `useFloatingEmoji.ts`) to `src/lib/hooks/`.

- [ ] 2.0 **Backend Integration & Data-Fetching Setup**
  - [ ] 2.1 Create the `src/services/` directory.
  - [ ] 2.2 Port `apiConfig.ts` and `supabaseClient.ts` to `src/services/`. Adapt `getApiKey` to work with Next.js environment variables (e.g., `process.env.NEXT_PUBLIC_...`).
  - [ ] 2.3 Port the data-fetching hooks: `useManifestoData.ts`, `usePromptFactoryData.ts`, and `useSupabaseHeroContent.ts` to `src/lib/hooks/`.
  - [ ] 2.4 Port the API service files `manifestoApi.ts` and `prompt-factory-api.ts` to `src/services/`.
  - [ ] 2.5 Check `package.json` and add any necessary dependencies (e.g., `@supabase/supabase-js`, `@google/genai`).
  - [ ] 2.6 Create a `.env.example` file in the root directory to document the required Supabase and AI service environment variables (`NEXT_PUBLIC_SUPABASE_URL`, etc.).

- [x] 3.0 **Core UI Component Adaptation**
  - [x] 3.1 Adapt `Button.tsx` to use Mantine's `<Button />` and its `variant` prop.
  - [x] 3.2 Adapt `Card.tsx` to use Mantine's `<Card />` component, mapping props for `shadow`, `radius`, and `padding`.
  - [x] 3.3 Adapt `Accordion.tsx` to use Mantine's `<Accordion />`.
  - [x] 3.4 Adapt `TabbedContent.tsx` to use Mantine's `<Tabs />`.
  - [x] 3.5 Adapt `QuoteBlock.tsx` using Mantine's `<Blockquote />` and `<Group />`.
  - [x] 3.6 Adapt `Carousel.tsx` and `SlideCarousel.tsx`. Since the original is a custom implementation, port the existing logic and replace Tailwind classes with Mantine's `<Box>` or CSS Modules for styling.

- [x] 4.0 **Composite & E-Learning Component Adaptation**
  - [x] 4.1 Adapt layout components (`PageSection.tsx`, `LearningUnitLayout.tsx`) to use Mantine's layout components like `<Container>`, `<SimpleGrid>`, and `<Stack>`.
  - [x] 4.2 Adapt interactive e-learning components (`MissionBlock.tsx`, `InlineQuiz.tsx`, `SentenceBuilder.tsx`) by replacing their base HTML elements with the newly adapted Core UI components.
  - [x] 4.3 Adapt all showcase components (`StatsGroup.tsx`, `ProgressCard.tsx`, `FeatureGridSection.tsx`, etc.) to use Mantine components.
  - [x] 4.4 Systematically review all adapted components and replace any `<a>` tags or `navigateTo` calls with Next.js's `<Link>` component for internal navigation.

- [x] 5.0 **Full Application Porting (Prompt Factory & Manifesto)**
  - [x] 5.1 Adapt the main `PromptFactoryApp.tsx` component and all its children (`CategorySelector`, `RecipeSelector`, `PromptBuilder`, `GenerationResult`), ensuring the state machine and logic remain intact while swapping all UI elements for their Mantine-adapted versions.
  - [x] 5.2 Adapt the `ManifestoCoCreationPage.tsx` and its child components (`PilarV6_ExpandedFeature`, `SuggestionForm`, `SuggestionCard`), ensuring the data from the `useManifestoData` hook is correctly displayed.

- [x] 6.0 **Verification and Showcase Page Implementation**
  - [x] 6.1 Create the new page file at `src/app/dev/ia-ported/page.tsx`.
  - [x] 6.2 Import every adapted component from `src/components/ia-ported/` into this page.
  - [x] 6.3 Structure the page with clear headings for each component or group of components.
  - [x] 6.4 Render each component with the necessary props (using mock data where needed) to demonstrate its visual appearance and functionality.
  - [x] 6.5 Thoroughly test all interactions on the showcase page to ensure everything works as expected within the `formacao-digital-2` environment.
