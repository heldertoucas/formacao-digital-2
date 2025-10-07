# Product Requirements Document: Implementing Working Mini-Apps

## 1. Introduction/Overview
This document outlines the requirements for implementing fully working versions of three interactive mini-applications: the AI Trainer, Neural Explorer, and Sentence Builder. These applications are designed to serve as interactive educational tools to help students learn fundamental concepts about Artificial Intelligence.

## 2. Goals
*   To provide interactive and engaging educational tools for students learning about AI.
*   To ensure each mini-app is fully functional, responsive, and provides clear visual feedback.
*   To integrate the mini-apps seamlessly into the existing `iapt4` project, adhering to its design system.

## 3. User Stories
As a student learning about AI, I want to:
*   **AI Trainer:** Interact with a simulated AI to understand how data quality impacts model performance, by training and testing it with different datasets.
*   **Neural Explorer:** Visually explore how language models construct sentences based on probabilities, by interactively building a sentence word by word.
*   **Sentence Builder:** Experiment with AI "creativity" and observe how word choices influence the coherence and future predictions of a sentence.

## 4. Functional Requirements

### 4.1. General
1.  The mini-apps must load without errors.
2.  All interactive elements within each mini-app must be responsive to user input.
3.  The mini-apps must provide clear and intuitive visual feedback for all user actions and system states.
4.  The mini-apps must be performant enough to ensure a smooth and engaging user experience.
5.  The mini-apps must adhere to the `iapt4` project's existing design system, with necessary redesigns implemented where current temporary styling is not aligned.

### 4.2. AI Trainer
1.  The application must guide the user through distinct phases: clean training, clean test introduction, clean testing, clean test results, dirty training introduction, dirty training, dirty test introduction, dirty testing, and final results.
2.  During training phases, users must classify images as 'dog' or 'cat' using provided buttons.
    *   The clean training phase will use a set of clean images.
    *   The dirty training phase will use a set of images designed to introduce incorrect learning.
3.  During testing phases, the AI will make a prediction (dog or cat) with a confidence score for each image. Users must confirm if the AI's prediction is correct or incorrect.
4.  The application must display a clear results summary at the end of the clean and dirty testing cycles, showing accuracy percentages for both scenarios.
5.  The BipBop AI character must interact with the user through dynamic dialogue and expressions (neutral, happy, confused, sad, thinking) that reflect the current phase, AI actions, and user feedback.
6.  The neural network visualization must dynamically update to reflect the AI's learning and actions, including:
    *   Input and output neurons (dog/cat).
    *   Brain neurons that light up based on training progress.
    *   Visual pulses indicating AI actions such as `predict_dog`, `predict_cat`, `dog_correct`, `cat_correct`, `dog_incorrect`, and `cat_incorrect`.
7.  A progress bar must be displayed for both training and testing phases, showing current item out of total items.
8.  The application must include smooth transitions between different phases and screens.

### 4.3. Neural Explorer
1.  The application must display an interactive 3D constellation visualization (using `react-three/fiber`) where nodes represent words and lines represent connections between them.
2.  The constellation must visually highlight the active path of the sentence being built and show a preview path when a word option is hovered.
3.  The application must include a word explorer panel that presents a list of probable next words, each with a visual probability circle indicating its likelihood.
4.  The word explorer panel must dynamically calculate and display layout for multiple levels (columns) of words, showing potential future words.
5.  The application must feature a sentence bar at the top that displays the currently built sentence and a real-time preview of the word being considered.
6.  Users must be able to select words from the word explorer panel to progressively build a sentence, extending the active path in the constellation.
7.  The application must include an introductory modal (`IntroModal`) to explain the concept of predictive text generation and a completion modal (`CompletionModal`) to celebrate the completion of a sentence.
8.  The application must start with a predefined common prefix sentence (e.g., "o segredo").
9.  Users must be able to reset the sentence exploration, either via a dedicated reset button or by clicking on a node in the constellation.

### 4.4. Sentence Builder
1.  The application must include AI settings, specifically a creativity slider (ranging from 0 to 1) that influences the selection of the underlying sentence generation model (e.g., 'low' or 'high' creativity trees).
2.  The application must display the current sentence being built, with each word presented as an editable button.
3.  Users must be able to click on a previously chosen word to edit the sentence from that point forward, allowing for alternative word choices.
4.  The application must present probability options for the next word, based on the current sentence context and the selected AI creativity level.
    *   Each probability option must display the word and its probability percentage, along with a visual progress bar.
    *   Hovering over a probability option must display a preview of the full sentence that would be generated if that option were chosen.
5.  The application must include a neural network animation that visually indicates when the AI is "thinking" or calculating the next word probabilities.
6.  The application must provide a completion screen that summarizes the built sentence and its coherence score (calculated based on the probabilities of chosen words).
7.  The completion screen must include a "Big Lesson" explanation about how AI generates text and the impact of context.
8.  A reset button must be available on the completion screen to allow users to build another sentence.

## 5. Non-Goals (Out of Scope)
*   User authentication.
*   Data persistence (user progress or settings will not be saved across sessions).
*   Complex external API integrations beyond what is currently implemented for data fetching.

## 6. Design Considerations
*   The mini-apps should leverage existing components and styling from the `iapt4` project where possible.
*   For elements currently using temporary styling, a redesign should be implemented to align with the `iapt4` design system, ensuring a cohesive look and feel.
*   Focus on clear visual hierarchy, intuitive interaction patterns, and accessibility.

## 7. Technical Considerations
*   The existing TypeScript/React codebase in the `temporary` directory will serve as the starting point.
*   State management within each mini-app should be reviewed and potentially refactored for clarity and maintainability.
*   Component separation should be optimized to promote reusability and testability.

## 8. Success Metrics
*   All core functionalities for each mini-app are implemented and demonstrably working.
*   The mini-apps are integrated into the main `iapt4` application flow (e.g., accessible via navigation).
*   User feedback (if collected) indicates a positive and understandable learning experience.

## 9. Open Questions
*   Are there any specific performance targets (e.g., load times, animation smoothness) that need to be met?
*   Are there any specific accessibility standards (e.g., WCAG level) that need to be adhered to beyond general best practices?
*   What is the preferred method for integrating these mini-apps into the main application's routing and navigation?