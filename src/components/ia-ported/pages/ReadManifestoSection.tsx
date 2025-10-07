
import React from 'react';
import { Grid, Title, Text, Button, List, ThemeIcon, Stack } from '@mantine/core';
import ManifestoIllustration from '@/components/ia-ported/illustrations/ManifestoIllustration';
import RemixIcon from '@/components/ia-ported/ui/RemixIcon';
import PageSection from '@/components/ia-ported/layout/PageSection';

const ReadManifestoSection = () => {
    const MANIFESTO_URL = "https://docs.google.com/document/d/1WG8fopEEd_76YBZg_jNg0Nz6xBK39angAjc2imIAh6Q/edit?usp=sharing";

    const features = [
        { icon: 'book-open-line', text: 'Compreenda a nossa visão para uma IA ética.' },
        { icon: 'group-line', text: 'Descubra como pode participar no movimento.' },
        { icon: 'lightbulb-flash-line', text: 'Inspire-se para contribuir com as suas próprias ideias.' },
    ];

    return (
        <PageSection
            id="read-manifesto"
            title={<>Leia o Manifesto <Text span c="blue">IA para Todos</Text></>}
            subtitle="Um documento vivo que detalha os nossos princípios fundamentais para uma IA que sirva a humanidade."
        >
            <Grid gutter="xl" align="center">
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <Stack gap="lg">
                        <List
                            spacing="sm"
                            size="lg"
                            center
                            icon={
                                <ThemeIcon color="green" size={24} radius="xl">
                                    <RemixIcon name="checkbox-circle-fill" />
                                </ThemeIcon>
                            }
                        >
                            {features.map(feature => (
                                <List.Item key={feature.text} icon={<ThemeIcon color="green" size={24} radius="xl"><RemixIcon name={feature.icon} /></ThemeIcon>}>
                                    {feature.text}
                                </List.Item>
                            ))}
                        </List>
                        <Button
                            component="a"
                            href={MANIFESTO_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            radius="xl"
                        >
                            Abrir o Documento
                        </Button>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                    <ManifestoIllustration />
                </Grid.Col>
            </Grid>
        </PageSection>
    );
};

export default ReadManifestoSection;
