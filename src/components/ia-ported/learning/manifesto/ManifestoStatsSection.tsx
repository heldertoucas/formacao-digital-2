
import React from 'react';
import { Text, Title, SimpleGrid, Paper, ThemeIcon } from '@mantine/core';
import useCountUp from '@/lib/hooks/useCountUp';
import { useIntersection } from '@mantine/hooks';
import PageSection from '@/components/ia-ported/layout/PageSection';
import RemixIcon from '@/components/ia-ported/ui/RemixIcon';

const StatItem = ({ value, label, icon }: { value: number, label: string, icon: string }) => {
    const { ref, entry } = useIntersection({ threshold: 0.5 });
    const count = useCountUp(value, entry?.isIntersecting || false);

    return (
        <Paper ref={ref} withBorder p="lg" radius="md" style={{ textAlign: 'center' }}>
            <ThemeIcon size={64} radius="xl" variant="light" mx="auto" mb="md">
                <RemixIcon name={icon} className="text-4xl" />
            </ThemeIcon>
            <Title order={2}>{count.toLocaleString('pt-PT')}</Title>
            <Text c="dimmed">{label}</Text>
        </Paper>
    );
};

const ManifestoStatsSection = () => {
    const stats = [
        { value: 7, label: 'Sugestões da Comunidade', icon: 'chat-new-line' },
        { value: 6, label: 'Princípios em Votação', icon: 'scales-3-line' },
        { value: 83, label: 'Votos Totais', icon: 'thumb-up-line' },
    ];

    return (
        <PageSection
            id="stats"
            title={<>A Nossa Comunidade em <Text span c="blue">Números</Text></>}
            subtitle="O nosso manifesto é um documento vivo, construído com o contributo de todos. Veja o impacto da sua participação."
        >
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt="xl">
                 {stats.map((stat) => (
                    <StatItem key={stat.label} {...stat} />
                ))}
            </SimpleGrid>
            <Text c="dimmed" ta="center" mt="xl" size="sm" maw="40rem" mx="auto">
                Estes números são baseados nas contribuições ativas da nossa comunidade. Quando tivermos mais de 10 sugestões, estes dados serão atualizados em tempo real.
            </Text>
        </PageSection>
    );
};

export default ManifestoStatsSection;
