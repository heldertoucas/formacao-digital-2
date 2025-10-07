
import React from 'react';
import { Grid, Title, Text, ThemeIcon, Stack, Group } from '@mantine/core';
import PageSection from '../layout/PageSection';
import TeamworkIllustration from '../illustrations/TeamworkIllustration';
import RemixIcon from '../ui/RemixIcon';

const AboutV1_Storyteller = () => {
    const coreTenets = [
        { icon: 'compass-3-line', title: 'A Nossa Missão', text: 'Capacitar todos os cidadãos com literacia em IA, garantindo que a tecnologia serve a humanidade de forma justa e transparente.' },
        { icon: 'eye-line', title: 'A Nossa Visão', text: 'Um futuro onde a IA é uma ferramenta para o bem comum, acessível a todos e desenvolvida com supervisão humana e responsabilidade.' },
        { icon: 'group-2-line', title: 'Os Nossos Valores', text: 'Inclusividade, Educação, Transparência, Responsabilidade e Colaboração são os pilares que guiam todas as nossas iniciativas.' }
    ];

    return (
        <PageSection
            id="about-v1"
            title={<>Sobre Nós V1: <span className="text-pcd-accent">A Nossa História</span></>}
            subtitle="Uma iniciativa de cidadãos para cidadãos, unida pela crença de que a tecnologia deve servir a humanidade."
        >
            <Grid gutter="xl" align="center">
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <TeamworkIllustration />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="xl">
                        {coreTenets.map((tenet, index) => (
                            <Group key={tenet.title} align="flex-start">
                                <ThemeIcon variant="light" size="xl" radius="md">
                                    <RemixIcon name={tenet.icon} className="text-2xl" />
                                </ThemeIcon>
                                <div>
                                    <Title order={4}>{tenet.title}</Title>
                                    <Text c="dimmed">{tenet.text}</Text>
                                </div>
                            </Group>
                        ))}
                    </Stack>
                </Grid.Col>
            </Grid>
        </PageSection>
    );
};

export default AboutV1_Storyteller;
