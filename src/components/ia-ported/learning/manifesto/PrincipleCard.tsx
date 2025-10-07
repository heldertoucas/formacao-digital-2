'use client';

import React, { useState, useEffect } from 'react';
import { Card, Text, Title, Group, Button, Progress, Tabs, Image, Alert, Box, ThemeIcon } from '@mantine/core';
import { marked } from 'marked';
import RemixIcon from '../../ui/RemixIcon';
import InlineQuiz from '../InlineQuiz';
import { ManifestoPrinciple } from '../../../../lib/hooks/useManifestoData';

type PrincipleCardProps = {
    principle: ManifestoPrinciple;
    onVote: (principleId: string, voteType: 'up' | 'down') => void;
    onSuggest: (principleTitle: string) => void;
};

const PrincipleCard = ({ principle, onVote, onSuggest }: PrincipleCardProps) => {
    const [voted, setVoted] = useState<'up' | 'down' | null>(null);

    useEffect(() => {
        const storedVote = localStorage.getItem(`vote_principle_${principle.id}`);
        if (storedVote) {
            setVoted(storedVote as 'up' | 'down');
        }
    }, [principle.id]);

    const handleVote = (voteType: 'up' | 'down') => {
        if (voted) return;
        setVoted(voteType);
        localStorage.setItem(`vote_principle_${principle.id}`, voteType);
        onVote(principle.id, voteType);
    };

    const totalVotes = principle.upvotes + principle.downvotes;
    const upvotePercentage = totalVotes > 0 ? (principle.upvotes / totalVotes) * 100 : 50;
    
    const quizOptions = Array.isArray(principle.quiz_options) ? principle.quiz_options : [];

    return (
        <Card withBorder radius="md" padding={0}>
            <Group p="md" bg="var(--mantine-color-gray-0)">
                <Box p="sm" bg="blue.0" style={{ borderRadius: 'var(--mantine-radius-sm)' }}>
                    <RemixIcon name={principle.icon_name} className="text-3xl text-pcd-accent"/>
                </Box>
                <div>
                    <Title order={3}>{principle.title}</Title>
                    <Text size="sm" c="dimmed">{totalVotes} contribuições da comunidade</Text>
                </div>
            </Group>
            <Box p="md">
                <Text c="dimmed" mb="md">{principle.description}</Text>
                
                {principle.image_url && (
                     <Image 
                        src={principle.image_url} 
                        alt={`Ilustração para o princípio ${principle.title}`}
                        radius="sm"
                        mb="md"
                    />
                )}

                <Tabs defaultValue="fundamentacao">
                    <Tabs.List grow>
                        <Tabs.Tab value="fundamentacao">Fundamentação</Tabs.Tab>
                        <Tabs.Tab value="exemplo">Exemplo Prático</Tabs.Tab>
                        <Tabs.Tab value="quiz">Teste Rápido</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="fundamentacao" pt="xs">
                        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked.parse(principle.accordion_content || '') as string }} />
                    </Tabs.Panel>

                    <Tabs.Panel value="exemplo" pt="xs">
                        <Text>{principle.practical_example}</Text>
                    </Tabs.Panel>

                    <Tabs.Panel value="quiz" pt="xs">
                        <InlineQuiz
                            question={principle.quiz_question}
                            options={quizOptions}
                            correctFeedback={principle.quiz_correct_feedback}
                            incorrectFeedback={principle.quiz_incorrect_feedback}
                        />
                    </Tabs.Panel>
                </Tabs>

                <Box mt="lg" pt="lg" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                    <Text size="sm" fw={500} ta="center" mb="xs">Concorda com este princípio?</Text>
                    <Group justify="space-between">
                        <Button 
                            onClick={() => handleVote('up')}
                            disabled={!!voted}
                            color="green"
                            leftSection={<RemixIcon name="thumb-up-line" />}
                        >
                            {principle.upvotes}
                        </Button>
                        <Progress value={upvotePercentage} style={{ flex: 1 }} />
                        <Button 
                            onClick={() => handleVote('down')}
                            disabled={!!voted}
                            color="red"
                            leftSection={<RemixIcon name="thumb-down-line" />}
                        >
                            {principle.downvotes}
                        </Button>
                    </Group>
                     {voted && <Text ta="center" size="xs" c="dimmed" mt="xs">Obrigado pelo seu voto!</Text>}
                </Box>
                
                <Box mt="md" pt="md" style={{ borderTop: '1px dashed var(--mantine-color-gray-3)' }}>
                    <Button
                        onClick={() => onSuggest(principle.title)}
                        fullWidth
                        variant="default"
                        leftSection={<RemixIcon name="lightbulb-flash-line" />}
                    >
                        Tem sugestões?
                    </Button>
                </Box>
            </Box>
        </Card>
    );
};

export default PrincipleCard;