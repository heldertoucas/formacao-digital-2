
import React from 'react';
import { Card, Text, Title, ThemeIcon } from '@mantine/core';
import RemixIcon from './RemixIcon';

type GuidelineCardProps = {
    icon: string;
    title: string;
    description: string;
};

const GuidelineCard = ({ icon, title, description }: GuidelineCardProps) => (
    <Card withBorder radius="md" p="xl" style={{ textAlign: 'center' }}>
        <ThemeIcon size={80} radius="xl" variant="light" mx="auto" mb="xl">
            <RemixIcon name={icon} className="text-5xl" />
        </ThemeIcon>
        <Title order={3}>{title}</Title>
        <Text c="dimmed" mt="sm">{description}</Text>
    </Card>
);

export default GuidelineCard;
