'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Title, Text, Button, Group, Paper, Alert } from '@mantine/core';
import { marked } from 'marked';
import RemixIcon from '../../ui/RemixIcon';
import Rating from './Rating';
import { Recipe } from '../../../../types/prompt-factory';

declare const confetti: any;

type GenerationResultProps = {
  recipe: Recipe;
  finalPrompt: string;
  generatedOutput: string;
  isLoading: boolean;
  onRate: (rating: number) => void;
  onGenerationSuccess: () => void;
  onReset: () => void;
};

const GenerationResult = ({ recipe, finalPrompt, generatedOutput, isLoading, onRate, onGenerationSuccess, onReset }: GenerationResultProps) => {
    const [advancedTip] = useState(
        recipe.advanced_tips[Math.floor(Math.random() * recipe.advanced_tips.length)]
    );
    const [showSlowLoadMessage, setShowSlowLoadMessage] = useState(false);
    const [celebrated, setCelebrated] = useState(false);
    const resultBoxRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (isLoading) {
            setCelebrated(false);
            return;
        }

        if (!celebrated && generatedOutput) {
            setCelebrated(true);
            onGenerationSuccess();
            setTimeout(() => {
                if (resultBoxRef.current && typeof confetti === 'function') {
                    const rect = resultBoxRef.current.getBoundingClientRect();
                    const x = (rect.left + rect.width / 2) / window.innerWidth;
                    const y = (rect.top + rect.height / 2) / window.innerHeight;

                    confetti({
                        particleCount: 80,
                        spread: 90,
                        origin: { x, y },
                        zIndex: 9999,
                    });
                }
            }, 100);
        }
    }, [isLoading, generatedOutput, onGenerationSuccess, celebrated]);

    useEffect(() => {
        let timer: number;
        if (isLoading) {
            timer = window.setTimeout(() => {
                setShowSlowLoadMessage(true);
            }, 3000);
        } else {
            setShowSlowLoadMessage(false);
        }
        return () => clearTimeout(timer);
    }, [isLoading]);

    const isImage = recipe.type === 'image' && !isLoading && (generatedOutput.startsWith('https') || generatedOutput.startsWith('data:image'));

    return (
        <Box style={{ textAlign: 'center' }}>
            <Title order={2} size="h1"><Group justify='center' gap='sm'><RemixIcon name="sparkling-2-line" className="text-pcd-accent" />A Sua Criação está Pronta!</Group></Title>
            <Text c="dimmed" mt="sm" mb="xl" size="lg">Bom trabalho! Este é o resultado da sua colaboração com a IA.</Text>
            
             <Alert variant="light" color="blue" title="O SEU PROMPT" icon={<RemixIcon name="chat-quote-line" />} mb="xl">
                {finalPrompt}
            </Alert>

            <Paper ref={resultBoxRef} withBorder p="md" radius="md" style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isLoading ? (
                    <Box style={{ textAlign: 'center' }}>
                        <RemixIcon name="loader-4-line" className="text-4xl animate-spin mb-3 text-pcd-accent" />
                        <Text size="lg">A gerar com IA...</Text>
                        {showSlowLoadMessage && (
                             <Text size="sm" mt="sm" c="blue">A IA pode demorar um pouco, mas vai valer a pena esperar!</Text>
                        )}
                    </Box>
                ) : isImage ? (
                    <img src={generatedOutput} alt="Imagem gerada por IA" style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: 'var(--mantine-radius-md)' }} />
                ): (
                    <div
                        className="markdown-content"
                        dangerouslySetInnerHTML={{ __html: marked.parse(generatedOutput) as string }}
                    />
                )}
            </Paper>

            {!isLoading && generatedOutput && (
                <Box mt="xl">
                    <Alert variant="light" color="yellow" title="Dica Avançada" icon={<RemixIcon name="lightbulb-flash-line" />}>
                        {advancedTip}
                    </Alert>

                    <Box mt="xl">
                        <Text fw={500} mb="sm">Gostou desta "Receita"? Avalie!</Text>
                        <Group justify="center">
                            <Rating onRate={onRate} />
                        </Group>
                    </Box>
                    
                    <Box mt="xl">
                        <Button
                            onClick={onReset}
                            size="lg"
                            radius="xl"
                            leftSection={<RemixIcon name="loop-right-line" />}
                        >
                            Criar outro prompt
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default GenerationResult;