# Workflow: Creating Mini-Apps

This guide explains the process for building the interactive, self-contained modules that we call "mini-apps".

### What is a "Mini-App"?

A **mini-app** is more than a simple UI component. It's a complex, stateful experience that a user can interact with. They live in the `src/components/mini-apps/` directory.

| Feature             | Simple Component (`/components/common`) | Mini-App (`/components/mini-apps`)   |
| ------------------- | --------------------------------------- | ------------------------------------ |
| **Purpose**         | To display information (visual)         | To provide an experience (interactive) |
| **State Management**| Minimal to none (stateless)           | Often complex (stateful)             |
| **Example**         | `Button`, `Card`                        | `PhishingQuiz`, `AlgorithmVisualizer`  |

### Example Workflow: Creating a `Quiz` Mini-App

Let's imagine we're building a simple, multiple-choice quiz.

1.  **Create the Folder:**
    Create a new folder at `src/components/mini-apps/Quiz/`.

2.  **Develop the Core Logic (Hooks):**
    The quiz needs logic to manage state. This is a perfect use case for a custom hook, which can live alongside the component or in `src/lib/hooks/`.

    ```typescript
    // src/components/mini-apps/Quiz/useQuizState.ts
    import { useState } from 'react';
    import { saveScore } from '@/lib/api'; // Assuming an API helper in our lib folder

    export const useQuizState = (questions) => {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [score, setScore] = useState(0);

      const submitAnswer = async (isCorrect: boolean) => {
        if (isCorrect) {
          setScore(prev => prev + 1);
        }
        if (currentQuestionIndex === questions.length - 1) {
          await saveScore({ game: 'quiz', score });
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
        }
      };

      return { score, currentQuestion: questions[currentQuestionIndex], submitAnswer };
    };
    ```

3.  **Build the UI:**
    The `Quiz` mini-app will be composed of common components.

    ```typescript
    // src/components/mini-apps/Quiz/Quiz.tsx
    import React from 'react';
    import { Button, Card } from '@/components/common'; // Import common components
    import { Progress } from '@mantine/core'; // We can also use Mantine components directly
    import { useQuizState } from './useQuizState';

    export const Quiz = ({ questions }) => {
      const { score, currentQuestion, submitAnswer } = useQuizState(questions);

      return (
        <Card title={`Question ${currentQuestion.id}`}>
          <p>{currentQuestion.text}</p>
          <div>
            {currentQuestion.options.map(option => (
              <Button onClick={() => submitAnswer(option.isCorrect)}>
                {option.text}
              </Button>
            ))}
          </div>
          <Progress value={(score / questions.length) * 100} mt="md" />
        </Card>
      );
    };
    ```

4.  **Add it to the Component Library:**
    To develop the mini-app in isolation, add it to the `dev/components` page, providing it with mock data.

By following this pattern, you create a robust, self-contained module that is easy to test, maintain, and drop into any program page.
