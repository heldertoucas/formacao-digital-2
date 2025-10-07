'use client';

import React, { useState } from 'react';
import { Button, Text, Box } from '@mantine/core';

declare const confetti: (options: any) => void;

type QuizOption = {
    text: string;
    isCorrect: boolean;
};

type InlineQuizProps = {
    question: string;
    options: QuizOption[];
    correctFeedback: string;
    incorrectFeedback: string;
    onAnswer?: () => void;
};

const InlineQuiz = ({ question, options, correctFeedback, incorrectFeedback, onAnswer }: InlineQuizProps) => {
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (isCorrect: boolean) => {
        if (isAnswered) return;

        if (isCorrect) {
            setFeedback(correctFeedback);
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        } else {
            setFeedback(incorrectFeedback);
        }
        setIsAnswered(true);
        onAnswer?.();
    };

    const getFeedbackColor = () => {
        if (!feedback) return 'gray';
        return feedback === correctFeedback ? 'green' : 'red';
    };

    return (
        <Box>
            <Text size="lg" fw={500}>{question}</Text>
            <Box mt="md">
                {options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() => handleOptionClick(option.isCorrect)}
                        disabled={isAnswered}
                        fullWidth
                        variant="default"
                        justify="left"
                        my="sm"
                        styles={{
                            root: {
                                height: 'auto',
                                whiteSpace: 'normal',
                                padding: 'var(--mantine-spacing-md)',
                            },
                        }}
                    >
                        {option.text}
                    </Button>
                ))}
            </Box>
            {feedback && (
                <Text mt="sm" fw={500} c={getFeedbackColor()}>
                    {feedback}
                </Text>
            )}
        </Box>
    );
};

export default InlineQuiz;