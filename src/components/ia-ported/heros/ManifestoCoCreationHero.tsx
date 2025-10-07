
import React from 'react';
import { Box, Title, Text, Button, ThemeIcon } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';

const ManifestoCoCreationHero = () => (
    <Box
        style={{
            position: 'relative',
            paddingTop: '8rem',
            paddingBottom: '8rem',
            backgroundImage: 'linear-gradient(to bottom right, var(--mantine-color-violet-6), var(--mantine-color-pink-6))',
            color: 'white',
            textAlign: 'center',
            overflow: 'hidden',
        }}
    >
        <Box style={{ position: 'absolute', inset: 0, opacity: 0.2, zIndex: 1 }}>
            {/* Blobs would go here if implemented with inline styles or a dedicated component */}
        </Box>
        <Box style={{ position: 'relative', zIndex: 2 }}>
            <ThemeIcon size={80} radius="xl" variant="light" color="white" style={{ margin: 'auto', backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <RemixIcon name="git-repository-commits-line" style={{ fontSize: '3rem' }} />
            </ThemeIcon>
            <Title order={1} style={{ fontSize: '4rem', color: 'white' }} mt="xl">
                Manifesto IA para Todos
            </Title>
            <Text size="xl" maw="40rem" mx="auto" mt="md" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Participe na defesa de uma IA mais humana. O seu contributo é essencial.
            </Text>
            <Button component="a" href="#principios" size="lg" radius="xl" mt="xl" color="white" c="violet">
                Explorar os Princípios
            </Button>
        </Box>
    </Box>
);

export default ManifestoCoCreationHero;
