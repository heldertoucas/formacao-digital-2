
import React, { useState, useEffect, useMemo } from 'react';
import { Select, Button, Box, Title, Text, Group } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';
import { Recipe } from '../../../../types/prompt-factory';

declare const confetti: any;

type PromptBuilderProps = {
  recipe: Recipe;
  onGenerate: (prompt: string, type: 'text' | 'image') => void;
  onCopyPrompt: () => void;
};

const PromptBuilder = ({ recipe, onGenerate, onCopyPrompt }: PromptBuilderProps) => {
    const [placeholderValues, setPlaceholderValues] = useState<Record<string, string>>({});
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [copyStatus, setCopyStatus] = useState<'idle' | 'success'>('idle');

    useEffect(() => {
        const initialValues: Record<string, string> = {};
        recipe.placeholders.forEach(p => {
            initialValues[p.key] = p.options[0];
        });
        setPlaceholderValues(initialValues);
        setHasUserInteracted(false);
        setCopyStatus('idle');
    }, [recipe]);

    const handleSelectChange = (key: string, value: string | null) => {
        if (value === null) return;
        setHasUserInteracted(true);
        setPlaceholderValues(prev => ({ ...prev, [key]: value }));
    };

    const finalPrompt = useMemo(() => {
        return recipe.placeholders.reduce((currentPrompt, placeholder) => {
            const value = placeholderValues[placeholder.key];
            return currentPrompt.replace(placeholder.key, value);
        }, recipe.template);
    }, [recipe, placeholderValues]);
    
    const allPlaceholdersFilled = useMemo(() => {
        return recipe.placeholders.every(p => placeholderValues[p.key] && placeholderValues[p.key] !== '');
    }, [placeholderValues, recipe.placeholders]);

    const handleCopyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonRect = event.currentTarget.getBoundingClientRect();

        navigator.clipboard.writeText(finalPrompt).then(() => {
            setCopyStatus('success');
            onCopyPrompt();
            
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: {
                        x: (buttonRect.left + buttonRect.width / 2) / window.innerWidth,
                        y: (buttonRect.top + buttonRect.height / 2) / window.innerHeight,
                    },
                    scalar: 0.8,
                });
            }
        }, () => {
            alert("Falha ao copiar o prompt.");
        });
    };

    const renderInteractivePrompt = () => {
        const placeholderRegex = /(\[\w+\])/g;
        const parts = recipe.template.split(placeholderRegex).filter(part => part);

        return parts.map((part, index) => {
            if (placeholderRegex.test(part)) {
                const placeholderData = recipe.placeholders.find(p => p.key === part);
                if (placeholderData) {
                    return (
                        <Select
                            key={`${part}-${index}`}
                            data={placeholderData.options}
                            value={placeholderValues[part]}
                            onChange={(value) => handleSelectChange(part, value)}
                            style={{ display: 'inline-block', margin: '0 0.25rem' }}
                        />
                    );
                }
            }
            return <Text span key={`text-${index}`}>{part}</Text>;
        });
    }

    return (
        <Box style={{ textAlign: 'center' }}>
            <RemixIcon name="settings-3-line" className="text-4xl text-pcd-accent mb-2" />
            <Title order={2} size="h1">Quase lá! Só mais um passo.</Title>
            <Text c="dimmed" mt="sm" mb="xl" size="lg" maw="35rem" mx="auto">
                Agora é a sua vez de dar o toque final. Escolha as opções que preferir para personalizar o seu prompt.
            </Text>

            <Box p="xl" bg="white" style={{ borderRadius: 'var(--mantine-radius-md)', border: '1px solid var(--mantine-color-gray-2)' }} my="xl">
                <Text size="xl">{renderInteractivePrompt()}</Text>
            </Box>
            
            {allPlaceholdersFilled && hasUserInteracted && (
                <Text c="yellow.6" fw={500} mb="md"><Group justify="center"><RemixIcon name="sparkling-2-line" />Fantástico! O seu prompt está pronto a ser usado.</Group></Text>
            )}
            
            <Box p="lg" bg="blue.0" style={{ borderRadius: 'var(--mantine-radius-lg)', textAlign: 'left' }}>
                <Title order={3} size="h4" c="blue.7">O seu prompt final:</Title>
                <Text mt="xs">{finalPrompt}</Text>
                <Group mt="lg" grow>
                    {copyStatus === 'idle' ? (
                        <Button variant="default" onClick={handleCopyToClipboard} leftSection={<RemixIcon name="clipboard-line" />}>
                            Copiar Prompt
                        </Button>
                    ) : (
                        <Box style={{ textAlign: 'center' }}>
                            <Text c="green.7" fw={500} mb="xs"><Group justify="center"><RemixIcon name="check-double-line" />Copiado! Onde quer usar?</Group></Text>
                            <Group justify="center">
                                <Button component="a" href="https://gemini.google.com" target="_blank" variant="default" size="xs">Gemini</Button>
                                <Button component="a" href="https://chat.openai.com" target="_blank" variant="default" size="xs">ChatGPT</Button>
                                <Button component="a" href="https://copilot.microsoft.com" target="_blank" variant="default" size="xs">Copilot</Button>
                            </Group>
                        </Box>
                    )}
                    <Button 
                        onClick={() => onGenerate(finalPrompt, recipe.type)} 
                        disabled={!allPlaceholdersFilled} 
                        size="lg" 
                        leftSection={<RemixIcon name="magic-line" />}
                    >
                        Gerar com IA
                    </Button>
                </Group>
            </Box>
        </Box>
    );
};

export default PromptBuilder;
