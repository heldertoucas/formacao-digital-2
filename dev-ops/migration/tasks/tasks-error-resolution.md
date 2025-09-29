## Relevant Files

- `tsconfig.base.json` - New root tsconfig for path aliases.
- `packages/feature-passaporte/tsconfig.json` - Needs to extend the new root tsconfig.
- `packages/lib/tsconfig.json` - Needs to extend the new root tsconfig.
- `packages/mini-apps/tsconfig.json` - Needs to extend the new root tsconfig.
- `package.json` - Root package.json to add @types/node.
- `packages/ui/package.json` - Needs @storybook/react and tailwindcss.

### Notes

- This task list is designed to fix all the TypeScript and dependency errors reported.
- The CSS warning is an editor-specific issue and the fix is a recommendation.

## Tasks

- [ ] 1.0 Configure TypeScript Path Aliases
  - [ ] 1.1 Create a root `tsconfig.base.json` file to define workspace path aliases.
  - [ ] 1.2 Update `packages/feature-passaporte/tsconfig.json` to use the shared TypeScript config.
  - [ ] 1.3 Update `packages/lib/tsconfig.json` to use the shared TypeScript config.
  - [ ] 1.4 Update `packages/mini-apps/tsconfig.json` to use the shared TypeScript config.
- [ ] 2.0 Install Missing Dependencies and Types
  - [ ] 2.1 Install `@types/node` as a workspace dev dependency.
  - [ ] 2.2 Install `@storybook/react` and `tailwindcss` as dev dependencies in the `@repo/ui` package.
- [ ] 3.0 Resolve Editor-Specific CSS Warnings
  - [ ] 3.1 Advise user to install the "Tailwind CSS IntelliSense" VS Code extension.