
import React from 'react';
import { Paper, Text, Group, Divider } from '@mantine/core';

const statsData = [
  {
    title: 'Page views',
    stats: '456,133',
    description: '24% more than in the same month last year, 33% more that two years ago',
  },
  {
    title: 'New users',
    stats: '2,175',
    description: '13% less compared to last month, new user engagement up by 6%',
  },
  {
    title: 'Completed orders',
    stats: '1,994',
    description: '1994 orders were completed this month, 97% satisfaction rate',
  },
];

const StatsGroup = () => {
    return (
        <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
                {statsData.map((stat, index) => (
                    <React.Fragment key={stat.title}>
                        <div style={{ flex: 1 }}>
                            <Text size="xl" fw={700}>{stat.stats}</Text>
                            <Text size="xs" tt="uppercase" fw={700} c="dimmed">{stat.title}</Text>
                            <Text size="xs" c="dimmed" mt="sm">{stat.description}</Text>
                        </div>
                        {index < statsData.length - 1 && <Divider orientation="vertical" />}
                    </React.Fragment>
                ))}
            </Group>
        </Paper>
    );
};

export default StatsGroup;
