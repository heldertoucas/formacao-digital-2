## Relevant Files

- `components/layout/AppHeaderV2.tsx` - This file will be renamed to `GlobalHeader.tsx` and its internal component will be updated.
- `components/pages/ComponentLibraryPage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/CopilotCoursePage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/HomePage_Archive.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/HomePage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/ManifestoCoCreationPage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/MicrosoftCopilotCoursePage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/MicrosoftCopilotCoursePage2.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/MicrosoftCopilotCoursePage3.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/PromptFactoryPage.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/ReadManifestoSection.tsx` - Potential file that imports `AppHeaderV2`.
- `components/pages/ResponsibleAiUsageSection.tsx` - Potential file that imports `AppHeaderV2`.
- `index.tsx` - Main application entry point, might directly or indirectly import `AppHeaderV2`.

### Notes

- Unit tests should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use `npx jest [optional/path/to/test/file]` to run tests. Running without a path executes all tests found by the Jest configuration.

## Tasks

- [x] 1.0 Rename the `AppHeaderV2.tsx` file and its internal component.
  - [x] 1.1 Rename `C:\Users\helder.toucas\Downloads\iapt4v2\iapt4\components\layout\AppHeaderV2.tsx` to `C:\Users\helder.toucas\Downloads\iapt4v2\iapt4\components\layout\GlobalHeader.tsx`.
  - [x] 1.2 Open `C:\Users\helder.toucas\Downloads\iapt4v2\iapt4\components\layout\GlobalHeader.tsx` and rename the `AppHeaderV2` component to `GlobalHeader`.
- [x] 2.0 Update all references to `AppHeaderV2` in other files.
  - [x] 2.1 Search for all files that import or use `AppHeaderV2`.
  - [x] 2.2 For each found file, update the import path from `AppHeaderV2` to `GlobalHeader`.
  - [x] 2.3 For each found file, update all JSX references from `<AppHeaderV2 ... />` to `<GlobalHeader ... />`.
- [x] 3.0 Clean up the old `AppHeaderV2.tsx` file.
  - [x] 3.1 Delete the `C:\Users\helder.toucas\Downloads\iapt4v2\iapt4\components\layout\AppHeaderV2.tsx` file.
- [x] 4.0 Verify the refactoring.
  - [x] 4.1 Run the application to ensure it builds successfully.
  - [x] 4.2 Manually check relevant pages to confirm the header is displayed correctly and its functionality is unchanged.
