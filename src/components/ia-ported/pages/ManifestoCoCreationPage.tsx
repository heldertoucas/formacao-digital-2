'use client';

import React, { useState } from 'react';
import { Box, LoadingOverlay, Alert, Loader, Text } from '@mantine/core';
import AppFooter from '@/components/ia-ported/layout/AppFooter';
import PageSection from '@/components/ia-ported/layout/PageSection';
import RemixIcon from '@/components/ia-ported/ui/RemixIcon';
import ManifestoCoCreationHero from '@/components/ia-ported/heros/ManifestoCoCreationHero';
import PilarV6_ExpandedFeature from '@/components/ia-ported/manifesto-pilares/PilarV6_ExpandedFeature';
import SuggestionForm from '@/components/ia-ported/learning/manifesto/SuggestionForm';
import { useManifestoData } from '@/lib/hooks/useManifestoData';
import SuggestionCard from '@/components/ia-ported/learning/manifesto/SuggestionCard';
import ReadManifestoSection from '@/components/ia-ported/pages/ReadManifestoSection';
import ResponsibleAiUsageSection from '@/components/ia-ported/pages/ResponsibleAiUsageSection';
import ManifestoStatsSection from '@/components/ia-ported/learning/manifesto/ManifestoStatsSection';

const ManifestoCoCreationPage = () => {
    const { principles, suggestions, isLoading, error, voteOnPrinciple, submitSuggestion, voteOnSuggestion, refreshData } = useManifestoData();
    const [prefilledSuggestion, setPrefilledSuggestion] = useState('');

    const handleSuggestForPrinciple = (principleTitle: string) => {
        const text = `Sugestão acerca do princípio "${principleTitle}" do Manifesto IA para Todos: `;
        setPrefilledSuggestion(text);
        document.getElementById('contribuir')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box>
            <LoadingOverlay visible={isLoading} />
            <main>
                <ManifestoCoCreationHero />
                <ManifestoStatsSection />
                <ReadManifestoSection />

                {error && <Alert color="red" title="Erro ao carregar os dados">{error}</Alert>}
                {!isLoading && !error && (
                    <PilarV6_ExpandedFeature 
                        principles={principles} 
                        onVote={voteOnPrinciple}
                        onSuggest={handleSuggestForPrinciple}
                    />
                )}

                <PageSection
                    id="contribuir"
                    title="Junte-se ao Movimento"
                    subtitle="Falta algum princípio? Tem uma ideia para melhorar um existente? Partilhe-a connosco."
                    bg="blue.0"
                >
                    <Box maw="40rem" mx="auto">
                        <SuggestionForm onSubmitSuggestion={submitSuggestion} prefilledText={prefilledSuggestion} onSubmissionSuccess={refreshData} />
                    </Box>
                </PageSection>


                <PageSection
                    id="sugestoes"
                    title="Sugestões da Comunidade"
                    subtitle="Veja as ideias que outros membros partilharam e que foram aprovadas. Vote nas que mais lhe agradam para as ajudar a ganhar visibilidade."
                >
                    {isLoading && <Loader />}
                    {error && <Alert color="red">{error}</Alert>}
                    {!isLoading && !error && (
                        <Box style={{ display: 'flex', flexDirection: 'column', gap: 'var(--mantine-spacing-md)' }} maw="50rem" mx="auto">
                           {suggestions && suggestions.length > 0 ? (
                                suggestions.map((s, index) => (
                                    <SuggestionCard key={s.id} suggestion={s} onVote={voteOnSuggestion} onVoteSuccess={refreshData} />
                                ))
                           ) : (
                                <Text c="dimmed" ta="center">
                                    <RemixIcon name="chat-off-line" style={{ fontSize: '2rem' }} />
                                    <p>Ainda não há sugestões aprovadas. Seja o primeiro a contribuir!</p>
                                </Text>
                           )}
                        </Box>
                    )}
                </PageSection>

                <ResponsibleAiUsageSection />
            </main>
            <AppFooter navigateTo={() => {}} />
        </Box>
    );
};

export default ManifestoCoCreationPage;