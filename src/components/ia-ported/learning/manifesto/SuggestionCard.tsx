'use client';

import React, { useState, useEffect } from 'react';
import { Card, Text, Button, Group, Blockquote } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';
import { ManifestoSuggestion } from '../../../../lib/hooks/useManifestoData';

type SuggestionCardProps = {
    suggestion: ManifestoSuggestion;
    onVote: (suggestionId: string, voteType: 'up', onVoteSuccess?: () => void) => void;
    onVoteSuccess: () => void;
};

const SuggestionCard = ({ suggestion, onVote, onVoteSuccess }: SuggestionCardProps) => {
    const [voted, setVoted] = useState<boolean>(false);
    const [localUpvotes, setLocalUpvotes] = useState(suggestion.upvotes);

    useEffect(() => {
        const storedVote = localStorage.getItem(`vote_suggestion_${suggestion.id}`);
        if (storedVote) {
            setVoted(true);
        }
        setLocalUpvotes(suggestion.upvotes);
    }, [suggestion]);

    const handleVote = () => {
        if (voted) return;
        setVoted(true);
        setLocalUpvotes(prev => prev + 1);
        localStorage.setItem(`vote_suggestion_${suggestion.id}`, 'true');
        onVote(suggestion.id, 'up', onVoteSuccess);
    };

    const formattedDate = new Date(suggestion.created_at).toLocaleDateString('pt-PT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Card withBorder radius="md" padding="lg">
            <Group justify="space-between">
                <Blockquote cite={`- ${suggestion.author || 'Anónimo'}, ${formattedDate}`} style={{ flex: 1 }}>
                    {suggestion.suggestion_text}
                </Blockquote>
                <Button
                    onClick={handleVote}
                    disabled={voted}
                    variant={voted ? 'light' : 'filled'}
                    color={voted ? 'green' : 'blue'}
                    leftSection={<RemixIcon name="arrow-up-s-line" />}
                >
                    Apoiar ({localUpvotes})
                </Button>
            </Group>
            {voted && <Text size="xs" c="green" mt="xs" ta="right">Obrigado por apoiar!</Text>}
        </Card>
    );
};

export default SuggestionCard;