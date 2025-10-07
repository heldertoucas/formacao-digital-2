
import React from 'react';
import { Grid, Title, Text, Button, ThemeIcon, SimpleGrid } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';

const features = [
  {
    icon: 'creative-commons-by-line',
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: 'file-code-line',
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: 'focus-3-line',
    title: 'No annoying focus ring',
    description: 'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: 'temp-hot-line',
    title: 'Flexible',
    description: 'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

const FeatureGridSection = () => {
  return (
    <Grid gutter={{ base: 'xl', md: 50 }} align="center">
      <Grid.Col span={{ base: 12, md: 5 }}>
        <Title order={2}>
          A fully featured React components library for your next project
        </Title>
        <Text mt="md" c="dimmed">
          Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan' }}
          size="lg"
          radius="xl"
          mt="xl"
        >
          Get started
        </Button>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {features.map((feature) => (
            <div key={feature.title}>
                <ThemeIcon
                    size={44}
                    radius="lg"
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan' }}
                >
                    <RemixIcon name={feature.icon} className="text-2xl" />
                </ThemeIcon>
                <Text fw={500} fz="lg" mt="md">{feature.title}</Text>
                <Text c="dimmed" mt="sm">{feature.description}</Text>
            </div>
          ))}
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );
};

export default FeatureGridSection;
