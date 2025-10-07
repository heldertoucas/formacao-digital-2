
import React from 'react';
import { Box, Text, Group, Anchor, Container } from '@mantine/core';
import StaticLogo from '../StaticLogo';
import Link from 'next/link';

const AppFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" bg="gray.9" c="white" py="lg">
            <Container size="xl" style={{ textAlign: 'center' }}>
                <Group justify="center" mb="md">
                    <StaticLogo className="h-8 mr-3" />
                    <Text size="xl" fw={700} c="white">IA para Todos</Text>
                </Group>
                <Text c="dimmed" size="sm">
                    &copy; {currentYear} IA para Todos. Conteúdo sob licença Creative Commons.
                </Text>
                <Text c="dimmed" size="sm">
                    <Anchor component={Link} href="/">
                        Voltar à Página Principal
                    </Anchor>
                </Text>
            </Container>
        </Box>
    );
};

export default AppFooter;
