
import React from 'react';
import { Text, Group, ActionIcon, Anchor, Divider, Container, Box, Grid, Title, Stack } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';
import StaticLogo from '../StaticLogo';

type FooterProps = {
    onShowAllResources: () => void;
};

const Footer = ({ onShowAllResources }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const handleShowResourcesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onShowAllResources();
    };
    
    return (
        <Box component="footer" bg="gray.9" c="white" py="xl">
            <Container size="xl">
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Group mb="md">
                            <StaticLogo className="h-8 mr-3" />
                            <Title order={3} c="white">IA para Todos</Title>
                        </Group>
                        <Text c="dimmed" maw="40rem">
                            Um Programa Municipal e um Movimento de Cidadãos para garantir que a tecnologia de IA serve todas as pessoas com transparência, justiça e empatia.
                        </Text>
                        <Group mt="md">
                            <ActionIcon component="a" href="#" variant="transparent" c="dimmed"><RemixIcon name="twitter-line" /></ActionIcon>
                            <ActionIcon component="a" href="#" variant="transparent" c="dimmed"><RemixIcon name="github-line" /></ActionIcon>
                            <ActionIcon component="a" href="#" variant="transparent" c="dimmed"><RemixIcon name="linkedin-line" /></ActionIcon>
                            <ActionIcon component="a" href="mailto:info@example.com" variant="transparent" c="dimmed"><RemixIcon name="mail-line" /></ActionIcon>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Title order={4} c="white">Explorar</Title>
                        <Stack gap="sm" mt="sm">
                            <Anchor href="#manifesto" c="dimmed">Manifesto</Anchor>
                            <Anchor href="#about" c="dimmed">O Programa</Anchor>
                            <Anchor href="#learn" c="dimmed">Aprender</Anchor>
                            <Anchor href="#resources" onClick={handleShowResourcesClick} c="dimmed">Recursos</Anchor>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 3 }}>
                        <Title order={4} c="white">Participe</Title>
                        <Stack gap="sm" mt="sm">
                            <Anchor href="https://forms.cloud.microsoft/e/dJ6L5vNCwU" target="_blank" rel="noopener noreferrer" c="dimmed">Assinar o Manifesto</Anchor>
                            <Anchor href="#participate" c="dimmed">Junte-se à Comunidade</Anchor>
                            <Anchor href="mailto:info@example.com" c="dimmed">Contacto</Anchor>
                        </Stack>
                    </Grid.Col>
                </Grid>
                <Divider my="xl" color="gray.8" />
                <Text c="dimmed" ta="center" size="sm">
                    &copy; {currentYear} IA para Todos. Conteúdo sob licença Creative Commons.
                </Text>
                <Text c="dimmed" ta="center" size="sm">
                    Uma iniciativa do Programa Municipal para a Literacia em Inteligência Artificial da Câmara Municipal de Lisboa.
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
