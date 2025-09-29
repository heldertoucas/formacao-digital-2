## Relevant Files

- `/home/heldertoucas_ie/formacao-digital/node_modules/` - The directory we are testing for persistence.
- `/home/heldertoucas_ie/formacao-digital/dev-ops/logs/important-lessons.md` - The file where we will document the findings.

### Notes

- **Hypothesis:** The Google Cloud Shell VM is ephemeral, meaning the `node_modules` directory is not persisted between user sessions.
- **Implication:** If true, `pnpm install` must be the first command run at the start of any new development session.

## Tasks

- [ ] 0.0 Verify initial state.
  - [ ] 0.1 Run `ls -l` to confirm the initial absence of the `node_modules` directory.
- [ ] 1.0 Execute the experiment to verify the ephemeral environment theory.
  - [ ] 1.1 Install the `pnpm` package manager by running `npm install -g pnpm`.
  - [ ] 1.2 Run `pnpm install` to generate the `node_modules` directory.
  - [ ] 1.3 Run `ls -l` to confirm the `node_modules` directory has been created.
  - [ ] 1.4 **USER ACTION:** Close the current Cloud Shell session and start a new one.
  - [ ] 1.5 After the user returns, run `ls -l` again to check if `node_modules` still exists.
- [ ] 2.0 Document the findings.
  - [ ] 2.1 If the directory is gone, the theory is confirmed. Update `dev-ops/logs/important-lessons.md` to formalize this finding and the required workflow.
- [ ] 3.0 Proceed with development.
  - [ ] 3.1 Run `npm install -g pnpm` and then `pnpm install` again to set up the environment for the current session.
  - [ ] 3.2 Move on to the next pending development task.
