'use client';

import React, { useState } from 'react';
import { Button, Text, Box, SimpleGrid } from '@mantine/core';

const SentenceBuilder = () => {
    const [currentSentence, setCurrentSentence] = useState("Hoje");
    const [step, setStep] = useState(0);

    const wordSteps = [
        ['está', 'é', 'fui'],
        ['um', 'uma', 'o'],
        ['dia', 'tempo', 'sol'],
        ['de', 'com', 'para'],
        ['sol', 'chuva', 'festa']
    ];

    const handleWordClick = (word: string) => {
        setCurrentSentence(prev => `${prev} ${word}`);
        setStep(prev => prev + 1);
    };

    return (
        <Box p="md" bg="var(--mantine-color-gray-0)" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
            <Text size="xl" fw={500} h={50}>
                {step === wordSteps.length ? `${currentSentence}.` : currentSentence}
            </Text>
            <SimpleGrid cols={3} mt="md">
                {step < wordSteps.length ? (
                    wordSteps[step].map(word => (
                        <Button
                            key={word}
                            onClick={() => handleWordClick(word)}
                            variant="default"
                        >
                            {word}
                        </Button>
                    ))
                ) : (
                    <Text c="green" fw={500} style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                        Frase completa! Bom trabalho.
                    </Text>
                )}
            </SimpleGrid>
        </Box>
    );
};

export default SentenceBuilder;