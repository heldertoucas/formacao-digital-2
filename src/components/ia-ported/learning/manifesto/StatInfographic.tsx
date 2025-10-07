
import React from 'react';
import { Paper, Text, Group, ThemeIcon } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';

type StatInfographicProps = {
    statisticText: string;
    iconName: string;
};

const StatInfographic = ({ statisticText, iconName }: StatInfographicProps) => {
    const numberMatch = statisticText.match(/(\d[\d,.]*[%]?)/);
    
    let numberPart = '';
    let textPart = statisticText;

    if (numberMatch) {
        numberPart = numberMatch[0];
        textPart = statisticText.replace(numberMatch[0], '').trim();
    }

    return (
        <Paper withBorder p="md" radius="md" my="md">
            <Group >
                <ThemeIcon size={64} radius="md" variant="light">
                    <RemixIcon name={iconName} className="text-4xl" />
                </ThemeIcon>
                <div>
                    {numberPart && <Text size="2rem" fw={700} lh={1}>{numberPart}</Text>}
                    <Text c="dimmed">{textPart}</Text>
                </div>
            </Group>
        </Paper>
    );
};

export default StatInfographic;
