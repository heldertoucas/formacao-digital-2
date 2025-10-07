'use client';

import React, { useState, useEffect } from 'react';
import { Box, Text, Title, Loader, Alert, Anchor, Group } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { manifestoApi, NewsAnalysis } from '../../../../services/manifestoApi';
import RemixIcon from '../../ui/RemixIcon';
import StatInfographic from './StatInfographic';

type NewsSummaryBlockProps = {
    principleTitle: string;
    principleIcon: string;
};

const NewsSummaryBlock = ({ principleTitle, principleIcon }: NewsSummaryBlockProps) => {
    const { ref, entry } = useIntersection({ threshold: 0.5 });
    const [news, setNews] = useState<NewsAnalysis | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            if (!entry?.isIntersecting || news) return;

            setIsLoading(true);
            setError(null);
            try {
                const result = await manifestoApi.summarizeNewsForPrinciple(principleTitle);
                setNews(result);
            } catch (err) {
                console.error(`Failed to fetch news for ${principleTitle}:`, err);
                setError('Não foi possível carregar as notícias mais recentes.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, [entry?.isIntersecting, principleTitle, news]);

    const renderContent = () => {
        if (isLoading) {
            return (
                <Box style={{ textAlign: 'center' }}>
                    <Loader />
                    <Text mt="sm" c="dimmed">A procurar as notícias mais recentes...</Text>
                </Box>
            );
        }
        if (error) {
            return <Alert color="red" title="Erro">{error}</Alert>;
        }
        if (news) {
            return (
                <Box>
                    <Title order={4} ta="center">{news.questionTitle}</Title>
                    <Text c="blue" fw={500} ta="center" mt="xs">"{news.statementHeadline}"</Text>
                    
                    <StatInfographic statisticText={news.keyStatistic} iconName={principleIcon} />
                    
                    <Box>
                        {news.facts.map((fact, index) => (
                            <Group key={index} wrap="nowrap" align="flex-start" mt="sm">
                                <RemixIcon name="check-line" style={{ color: 'var(--mantine-color-blue-filled)' }} />
                                <Text size="sm">{fact}</Text>
                            </Group>
                        ))}
                    </Box>
                    
                    {news.sources.length > 0 && (
                        <Box mt="md" pt="md" style={{ borderTop: '1px dashed var(--mantine-color-gray-3)' }}>
                            <Text size="sm" fw={500} mb="xs">Fontes Consultadas pela IA:</Text>
                            {news.sources.slice(0, 2).map((source, index) => (
                                <Anchor key={index} href={source.uri} target="_blank" size="xs" lineClamp={1}>
                                    <Group gap="xs">
                                        <RemixIcon name="external-link-line" />
                                        {source.title || new URL(source.uri).hostname}
                                    </Group>
                                </Anchor>
                            ))}
                        </Box>
                    )}
                </Box>
            );
        }
        return null;
    };

    return (
        <Box ref={ref} my="md" p="md" bg="var(--mantine-color-gray-0)" style={{ borderRadius: 'var(--mantine-radius-md)', minHeight: '16rem' }}>
            {renderContent()}
        </Box>
    );
};

export default NewsSummaryBlock;