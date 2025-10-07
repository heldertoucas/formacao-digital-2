'use client';

import React, { useState } from 'react';
import { Box, Title, Text, Button, Group, Image, Accordion as MantineAccordion, Paper, Grid, ThemeIcon } from '@mantine/core';
import RemixIcon from '@/components/ia-ported/ui/RemixIcon';
import { ManifestoPrinciple } from '@/lib/hooks/useManifestoData';
import InlineQuiz from '@/components/ia-ported/learning/InlineQuiz';
import { marked } from 'marked';
import StatInfographic from '@/components/ia-ported/learning/manifesto/StatInfographic';
import FactChart from '@/components/ia-ported/learning/manifesto/FactChart';
import PageSection from '@/components/ia-ported/layout/PageSection';

type PilarProps = {
    principles: ManifestoPrinciple[];
    onVote: (principleId: string, voteType: 'up' | 'down') => void;
    onSuggest: (principleTitle: string) => void;
};

const ExpandedPrincipleFeature = ({ principle, onVote, onSuggest, isReversed, imageUrl }: { principle: ManifestoPrinciple, onVote: PilarProps['onVote'], onSuggest: PilarProps['onSuggest'], isReversed: boolean, imageUrl: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const quizOptions = Array.isArray(principle.quiz_options) ? principle.quiz_options : [];

    return (
        <Box>
            <Grid align="center" gutter="xl">
                <Grid.Col span={{ base: 12, md: 6 }} order={isReversed ? 2 : 1}>
                    <Image 
                        src={imageUrl} 
                        alt={`Ilustração para ${principle.title}`}
                        radius="lg"
                        shadow="xl"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }} order={isReversed ? 1 : 2}>
                    <Group mb="md">
                        <ThemeIcon size={64} radius="md" variant="light">
                            <RemixIcon name={principle.icon_name} className="text-4xl" />
                        </ThemeIcon>
                        <Title order={2}>{principle.title}</Title>
                    </Group>
                    <Text size="xl" c="dimmed">{principle.description}</Text>
                    <Group mt="xl" grow>
                         <Button onClick={() => onVote(principle.id, 'up')} variant="light" color="green" leftSection={<RemixIcon name="thumb-up-line" />}>Concordo ({principle.upvotes})</Button>
                         <Button onClick={() => onSuggest(principle.title)} variant="default" leftSection={<RemixIcon name="lightbulb-flash-line" />}>Sugerir Melhoria</Button>
                         <Button onClick={() => setIsExpanded(!isExpanded)} rightSection={<RemixIcon name={isExpanded ? 'arrow-up-s-line' : 'arrow-down-s-line'} />}>
                            {isExpanded ? 'Fechar' : 'Saber mais...'}
                        </Button>
                    </Group>
                </Grid.Col>
            </Grid>

            {isExpanded && (
                <Paper withBorder p="xl" radius="md" mt="xl">
                    <Title order={4} ta="center">{principle.relevance_title}</Title>
                    <Text c="blue" fw={500} ta="center" mb="lg">"{principle.relevance_headline}"</Text>
                    
                    <Grid gutter="xl">
                        <Grid.Col span={{ base: 12, md: 5 }}>
                            <StatInfographic statisticText={principle.relevance_infographic_text} iconName={principle.icon_name} />
                            {principle.chart_data && <FactChart chartData={principle.chart_data} />}
                            <Title order={5} mt="lg" mb="sm">Factos Chave:</Title>
                            <ul>
                                {(principle.relevance_facts || []).map((fact, index) => (
                                    <li key={index}><Text size="sm">{fact}</Text></li>
                                ))}
                            </ul>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 7 }}>
                            <MantineAccordion defaultValue="fundamentacao">
                                <MantineAccordion.Item value="fundamentacao">
                                    <MantineAccordion.Control>Fundamentação</MantineAccordion.Control>
                                    <MantineAccordion.Panel>
                                        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked.parse(principle.accordion_content || '') as string }} />
                                    </MantineAccordion.Panel>
                                </MantineAccordion.Item>
                                <MantineAccordion.Item value="exemplo">
                                    <MantineAccordion.Control>Exemplo Prático</MantineAccordion.Control>
                                    <MantineAccordion.Panel>{principle.practical_example}</MantineAccordion.Panel>
                                </MantineAccordion.Item>
                                <MantineAccordion.Item value="quiz">
                                    <MantineAccordion.Control>Teste Rápido</MantineAccordion.Control>
                                    <MantineAccordion.Panel>
                                        <InlineQuiz
                                            question={principle.quiz_question}
                                            options={quizOptions}
                                            correctFeedback={principle.quiz_correct_feedback}
                                            incorrectFeedback={principle.quiz_incorrect_feedback}
                                        />
                                    </MantineAccordion.Panel>
                                </MantineAccordion.Item>
                            </MantineAccordion>
                        </Grid.Col>
                    </Grid>
                </Paper>
            )}
        </Box>
    )
};

const PilarV6_ExpandedFeature = ({ principles, onVote, onSuggest }: PilarProps) => {
    const imageUrls = [
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/a730cfbbdf7b9acd31729af27a3fcc5d1279dcffcfbaccb99b8df44c8b02ad30.png",
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/3be8f288b0f89d4a712daa8b258b3f0ff24157736ca1ad0237678a82839bdd1f.png",
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/70bdad554f919292c7f032108c5dbb115b22c16d3ca29db465b936cff1408865.png",
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/5b8fe0fb2af9f6cd8c3499d2c765a818c5a87f21ae94683b5b3e82b88d3917ec.png",
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/4e3b6591a18057f1bc19ef9031809ba6422b2201d75bb8a6e3b9d6cadc71e39f.png",
        "https://cloud1.email2go.io/97fc9b260a90d9c0aca468d2e6536980/45b7f9908375148ac908cdfc01949017b86de501f72c2bfbf6a6259df69d90c5.png",
    ];

    return (
        <PageSection
            id="principios"
            title="Os Pilares do Manifesto"
            subtitle="Explore cada um dos princípios IA para Todos, veja exemplos e dê a sua opinião."
        >
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mantine-spacing-xl)' }}>
                {principles.map((principle, index) => (
                    <ExpandedPrincipleFeature 
                        key={principle.id} 
                        principle={principle} 
                        onVote={onVote} 
                        onSuggest={onSuggest}
                        isReversed={index % 2 !== 0}
                        imageUrl={imageUrls[index % imageUrls.length]}
                    />
                ))}
            </Box>
        </PageSection>
    );
};

export default PilarV6_ExpandedFeature;