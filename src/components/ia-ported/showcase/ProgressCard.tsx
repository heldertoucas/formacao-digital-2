
import React from 'react';
import { Card, Text, Badge, Group, Progress, Avatar, ActionIcon } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';

const avatars = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
];

const ProgressCard = () => {
    const completedTasks = 23;
    const totalTasks = 36;
    const progress = (completedTasks / totalTasks) * 100;

    return (
        <Card withBorder radius="md" padding="lg">
            <Group justify="space-between">
                <RemixIcon name="windows-fill" className="text-4xl text-pcd-blue" />
                <Badge size="lg" variant="light">12 days left</Badge>
            </Group>

            <Text fz="lg" fw={500} mt="md">
                5.3 minor release (September 2022)
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes
            </Text>

            <Text c="dimmed" fz="sm" mt="md">
                Tasks completed:{' '}
                <Text component="span" c="text" fw={500}>
                    {completedTasks}/{totalTasks}
                </Text>
            </Text>

            <Progress value={progress} mt={5} />

            <Group justify="space-between" mt="md">
                <Avatar.Group>
                    {avatars.map((src, index) => (
                        <Avatar key={index} src={src} radius="xl" />
                    ))}
                    <Avatar radius="xl">+5</Avatar>
                </Avatar.Group>
                <ActionIcon variant="default" size="lg">
                    <RemixIcon name="upload-2-line" />
                </ActionIcon>
            </Group>
        </Card>
    );
};

export default ProgressCard;
