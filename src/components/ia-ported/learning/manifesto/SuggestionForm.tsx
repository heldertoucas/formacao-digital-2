'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Textarea, Button, TextInput, Box, Title, Text, Alert, Group, Card } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';

type SuggestionFormProps = {
  onSubmitSuggestion: (suggestionText: string, author?: string, onSubmissionSuccess?: () => void) => Promise<void>;
  prefilledText?: string;
  onSubmissionSuccess?: () => void;
};

const SuggestionForm = ({ onSubmitSuggestion, prefilledText, onSubmissionSuccess }: SuggestionFormProps) => {
    const [suggestion, setSuggestion] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [showSignaturePopup, setShowSignaturePopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (prefilledText) {
            setSuggestion(prefilledText);
            setIsSubmitted(false);
            setTimeout(() => {
                textareaRef.current?.focus();
            }, 100);
        }
    }, [prefilledText]);

    const handleInitialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!suggestion.trim()) return;
        setError(null);
        setIsSubmitted(false);
        setShowSignaturePopup(true);
    };

    const handleFinalSubmit = async (isAnonymous: boolean = false) => {
        if (isLoading) return;

        setShowSignaturePopup(false);
        setIsLoading(true);
        setError(null);

        try {
            const author = isAnonymous ? undefined : authorName.trim();
            await onSubmitSuggestion(suggestion, author, onSubmissionSuccess);
            setIsSubmitted(true);
            setSuggestion('');
            setAuthorName('');
        } catch (err) {
            console.error("Error submitting suggestion:", err);
            setError("Ocorreu um erro. Por favor, tente novamente mais tarde.");
        } finally {
            setIsLoading(false);
        }
    };

    const renderFormContent = () => {
        if (isSubmitted) {
            return (
                <Alert color="green" title="Sugestão Enviada!" icon={<RemixIcon name="check-double-line" />}>
                    Obrigado pela sua valiosa contribuição! A sua ideia foi registada e será revista pela comunidade.
                    <Button variant="subtle" onClick={() => setIsSubmitted(false)} mt="sm">Submeter outra ideia</Button>
                </Alert>
            );
        }

        if (showSignaturePopup) {
            return (
                <Box style={{ textAlign: 'center' }}>
                    <Title order={4}>Quer assinar a sua sugestão?</Title>
                    <Text c="dimmed" mb="md">É opcional, mas ajuda a dar crédito às boas ideias da comunidade.</Text>
                    <TextInput
                        value={authorName}
                        onChange={(e) => setAuthorName(e.currentTarget.value)}
                        placeholder="O seu nome (opcional)"
                        disabled={isLoading}
                    />
                    <Group mt="md" grow>
                        <Button onClick={() => handleFinalSubmit(false)} loading={isLoading} leftSection={<RemixIcon name="quill-pen-line" />}>
                            Submeter com Assinatura
                        </Button>
                        <Button onClick={() => handleFinalSubmit(true)} loading={isLoading} variant="default">
                            Submeter Anonimamente
                        </Button>
                    </Group>
                </Box>
            );
        }
        
        return (
            <form onSubmit={handleInitialSubmit}>
                <Textarea
                    ref={textareaRef}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.currentTarget.value)}
                    placeholder="Escreva aqui a sua sugestão para um novo princípio..."
                    aria-label="Sugestão"
                    autosize
                    minRows={4}
                />
                <Button
                    type="submit"
                    disabled={!suggestion.trim()}
                    fullWidth
                    mt="md"
                    size="lg"
                    leftSection={<RemixIcon name="send-plane-2-line" />}
                >
                    Enviar Sugestão
                </Button>
            </form>
        );
    };

    return (
        <Card shadow="xl" padding="lg" radius="md" withBorder>
            <Box style={{ textAlign: 'center' }} mb="lg">
                <RemixIcon name="quill-pen-line" className="text-5xl text-pcd-accent mb-3" />
                <Title order={3}>A Sua Voz Conta</Title>
                <Text c="dimmed" mt="xs">Falta algum princípio? Tem uma ideia para melhorar um existente? Partilhe-a connosco.</Text>
            </Box>

            {renderFormContent()}
            
            {error && (
                 <Alert color="red" title="Erro" mt="md">{error}</Alert>
            )}
        </Card>
    );
};

export default SuggestionForm;