### \#\# Monorepo Configuration Audit

You will act as an Expert Full-Stack Engineer specializing in Turborepo monorepos with TypeScript. I am providing you with a complete list of error messages from my code editor.

Your task is to analyze these errors, diagnose the root causes for the TypeScript path resolution failures and CSS warnings, and provide a single, comprehensive execution plan to fix all related configuration issues across the entire monorepo.

**Core Problems to Solve:**

1.  TypeScript cannot find local monorepo packages (e.g., `@repo/tailwind-config`).
2.  TypeScript is missing type definitions for Node.js built-ins (like `require`).
3.  The CSS language server does not recognize the `@tailwind` directive.
4.  Dependencies like `@storybook/react` and `tailwindcss` are missing from the `packages/ui` package's local context.

**Your response must be an execution plan detailing the exact file modifications needed to fix all reported issues.**

-----

**Error Messages:**

```json
[{
	"resource": "/home/heldertoucascml/formacao-digital/apps/portal/tailwind.config.ts",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '@repo/tailwind-config/tailwind.config' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 26,
	"endLineNumber": 2,
	"endColumn": 65
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/feature-passaporte/tsconfig.json",
	"owner": "typescript",
	"severity": 8,
	"message": "File '@repo/typescript-config/react-library.json' not found.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 14,
	"endLineNumber": 2,
	"endColumn": 58
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/lib/tsconfig.json",
	"owner": "typescript",
	"severity": 8,
	"message": "File '@repo/typescript-config/base.json' not found.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 14,
	"endLineNumber": 2,
	"endColumn": 49
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/mini-apps/tsconfig.json",
	"owner": "typescript",
	"severity": 8,
	"message": "File '@repo/typescript-config/react-library.json' not found.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 14,
	"endLineNumber": 2,
	"endColumn": 58
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/tailwind-config/tailwind.config.ts",
	"owner": "typescript",
	"code": "2580",
	"severity": 8,
	"message": "Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.",
	"source": "ts",
	"startLineNumber": 12,
	"startColumn": 13,
	"endLineNumber": 12,
	"endColumn": 20
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/ui/.storybook/preview.ts",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '@storybook/react' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 30,
	"endLineNumber": 2,
	"endColumn": 48
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/ui/tailwind.config.ts",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module 'tailwindcss' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 1,
	"startColumn": 29,
	"endLineNumber": 1,
	"endColumn": 42
},{
	"resource": "/home/heldertoucascml/formacao-digital/packages/ui/tailwind.config.ts",
	"owner": "typescript",
	"code": "2307",
	"severity": 8,
	"message": "Cannot find module '@repo/tailwind-config/tailwind.config' or its corresponding type declarations.",
	"source": "ts",
	"startLineNumber": 2,
	"startColumn": 26,
	"endLineNumber": 2,
	"endColumn": 65
},{
	"resource": "/home/heldertoucascml/formacao-digital/apps/portal/src/app/globals.css",
	"owner": "_generated_diagnostic_collection_name_#4",
	"code": "unknownAtRules",
	"severity": 4,
	"message": "Unknown at rule @tailwind",
	"source": "css",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 10
}]
```