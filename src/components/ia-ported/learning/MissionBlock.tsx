
import React from 'react';
import { Card, Title, Group } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';

export type MissionCategory = 'aprender' | 'descobrir' | 'desafio' | 'partilhar';

type MissionBlockProps = {
    category: MissionCategory;
    title: string;
    children: React.ReactNode;
    id?: string;
};

const categoryStyles: Record<MissionCategory, { icon: string; color: string; }> = {
    aprender: { 
        icon: 'book-read-line', 
        color: 'blue',
    },
    descobrir: { 
        icon: 'compass-discover-line', 
        color: 'violet',
    },
    desafio: { 
        icon: 'focus-3-line', 
        color: 'green',
    },
    partilhar: { 
        icon: 'message-2-line', 
        color: 'gray',
    },
};

const MissionBlock = ({ category, title, children, id }: MissionBlockProps) => {
    const styles = categoryStyles[category];

    return (
        <Card id={id} shadow="lg" padding="xl" radius="md" withBorder style={{ borderTopWidth: '4px', borderTopColor: `var(--mantine-color-${styles.color}-light)` }}>
            <Title order={3} mb="lg">
                <Group>
                    <RemixIcon name={styles.icon} style={{ color: `var(--mantine-color-${styles.color}-filled)` }} />
                    {title}
                </Group>
            </Title>
            <div>{children}</div>
        </Card>
    );
};

export default MissionBlock;
