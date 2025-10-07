## Relevant Files

- `temporary/components/pages/AiTrainerPage.tsx` - Page component for the AI Trainer app.
- `temporary/learning/ai-trainer/AiTrainerApp.tsx` - Main application component for the AI Trainer.
- `temporary/learning/ai-trainer/AiTrainerApp.test.tsx` - Unit tests for `AiTrainerApp.tsx`.
- `temporary/components/pages/NeuralExplorerPage.tsx` - Page component for the Neural Explorer app.
- `temporary/learning/neural-explorer/NeuralExplorerApp.tsx` - Main application component for the Neural Explorer.
- `temporary/learning/neural-explorer/NeuralExplorerApp.test.tsx` - Unit tests for `NeuralExplorerApp.tsx`.
- `temporary/components/pages/SentenceBuilderPage.tsx` - Page component for the Sentence Builder app.
- `temporary/learning/sentence-builder/SentenceBuilderApp.tsx` - Main application component for the Sentence Builder.
- `temporary/learning/sentence-builder/SentenceBuilderApp.test.tsx` - Unit tests for `SentenceBuilderApp.tsx`.
- `data/ai-trainer-data.ts` - Data source for the AI Trainer application.
- `data/sentence-builder-data.ts` - Data source for the Sentence Builder application.

### Notes

- The existing components in the `temporary` directory should be moved to a permanent location like `components/learning/mini-apps/` as part of the integration task.
- Unit tests should be created for key components to ensure functionality.
- Use `npm test -- [optional/path/to/test/file]` to run tests.

## Tasks

- [x] 1.0 Refactor and Implement AI Trainer
  - [x] 1.1 Refactor `AiTrainerApp.tsx` to manage the overall state and flow of the application based on the distinct phases from the PRD (training, testing, results).
  - [x] 1.2 Implement the `TrainingScreen.tsx` for both "clean" and "dirty" training phases, allowing users to classify images.
  - [x] 1.3 Implement the `TestingScreen.tsx` for "clean" and "dirty" testing phases, where the AI predicts and the user confirms.
  - [x] 1.4 Implement the `ResultsScreen.tsx` to display accuracy percentages for both testing cycles.
  - [x] 1.5 Integrate `BipBopTheAi.tsx` to make its dialogue and expressions dynamic based on the application state.
  - [x] 1.6 Connect `NeuralNetworkVis.tsx` to the application state to reflect training progress and AI actions.
  - [x] 1.7 Implement `AiTrainerProgressBar.tsx` to show progress through the training and testing phases.
  - [x] 1.8 Ensure smooth screen transitions between all phases.
  - [x] 1.9 Review and refactor state management for the entire AI Trainer app for clarity and maintainability.

- [ ] 2.0 Refactor and Implement Neural Explorer
  - [x] 2.1 Refactor `NeuralExplorerApp.tsx` to manage the application state, including the sentence being built.
  - [x] 2.2 Implement `NeuralConstellation.tsx` using `react-three/fiber` to display the interactive 3D word constellation.
  - [x] 2.3 Implement hover effects on the constellation to show a preview path for the next word.
  - [x] 2.4 Implement the `WordExplorer.tsx` panel to display probable next words with `ProbabilityCircle.tsx`.
  - [x] 2.5 Implement the dynamic multi-level layout for future word columns in `WordExplorer.tsx`.
  - [x] 2.6 Implement the `SentenceBar.tsx` to show the current sentence and a real-time preview of the hovered word.
  - [x] 2.7 Implement the core logic for selecting words to update the sentence and the constellation's active path.
  - [x] 2.8 Integrate `IntroModal.tsx` and `CompletionModal.tsx` at the start and end of the user experience.
  - [x] 2.9 Implement the reset functionality (via button and clicking on a constellation node).
  - [x] 2.10 Review and refactor state management for the Neural Explorer app.

- [ ] 3.0 Refactor and Implement Sentence Builder
  - [ ] 3.1 Refactor `SentenceBuilderApp.tsx` to manage the overall application state.
  - [ ] 3.2 Implement `AiSettings.tsx`, including the creativity slider, and connect it to the sentence generation logic.
  - [ ] 3.3 Implement `SentenceDisplay.tsx` to show the current sentence with each word as an editable button.
  - [ ] 3.4 Implement the logic to allow editing the sentence from any previously chosen word.
  - [ ] 3.5 Implement `ProbabilityOption.tsx` to display next word choices with probabilities and a sentence preview on hover.
  - [ ] 3.6 Integrate `NeuralNetworkAnimation.tsx` to play when the AI is "thinking" (calculating probabilities).
  - [ ] 3.7 Implement the `CompletionScreen.tsx` with the final sentence, coherence score, and "Big Lesson" text.
  - [ ] 3.8 Implement the reset functionality on the completion screen.
  - [ ] 3.9 Review and refactor state management for the Sentence Builder app.

- [ ] 4.0 Integrate Mini-Apps into the Main Application
  - [ ] 4.1 Move the page components (`AiTrainerPage.tsx`, `NeuralExplorerPage.tsx`, `SentenceBuilderPage.tsx`) from `temporary/components/pages` to `components/pages`.
  - [ ] 4.2 Move the learning components from `temporary/learning/*` to a new `components/learning/mini-apps/` directory, preserving the structure for each app.
  - [ ] 4.3 Create routes for each mini-app page in the main application router (e.g., in `App.tsx` or a dedicated routing file).
  - [ ] 4.4 Add navigation links to the mini-apps in a relevant part of the UI (e.g., a new "Labs" or "Demos" section in the `AppHeader.tsx` or `MegaMenu.tsx`).

- [ ] 5.0 Final Styling and Design System Alignment
  - [ ] 5.1 Review all components in the AI Trainer app and update styling to align with the `iapt4` design system.
  - [ ] 5.2 Review all components in the Neural Explorer app and update styling to align with the `iapt4` design system.
  - [ ] 5.3 Review all components in the Sentence Builder app and update styling to align with the `iapt4` design system.
  - [ ] 5.4 Perform a final review to ensure all three mini-apps are fully responsive and visually cohesive with the main application.