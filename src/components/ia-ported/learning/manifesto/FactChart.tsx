'use client';

import React from 'react';
import { RingProgress, Text, Box, Progress, Group } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';

interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

interface FactChartProps {
    chartData: {
        type: 'donut' | 'bar';
        data: ChartDataPoint[];
        unit?: string;
    };
}

const DonutChart = ({ data, unit = '%' }: { data: ChartDataPoint[]; unit?: string }) => {
    const { ref, entry } = useIntersection();
    const point = data[0];

    return (
        <Box ref={ref} style={{ position: 'relative', width: 160, height: 160 }}>
            <RingProgress
                size={160}
                thickness={12}
                roundCaps
                sections={[{ value: entry?.isIntersecting ? point.value : 0, color: point.color || 'blue' }]}
                label={
                    <Box style={{ textAlign: 'center' }}>
                        <Text fw={700} size="xl">{`${point.value}${unit}`}</Text>
                        <Text size="xs" c="dimmed">{point.label}</Text>
                    </Box>
                }
            />
        </Box>
    );
};

const BarChart = ({ data, unit = '%' }: { data: ChartDataPoint[]; unit?: string }) => {
    const { ref, entry } = useIntersection();
    const maxValue = Math.max(...data.map(d => d.value), 100);

    return (
        <Box ref={ref} style={{ width: '100%' }}>
            {data.map((point, index) => {
                const width = entry?.isIntersecting ? (point.value / maxValue) * 100 : 0;
                return (
                    <div key={index} style={{ marginBottom: 'var(--mantine-spacing-sm)' }}>
                        <Group justify="space-between">
                            <Text size="sm" c="dimmed">{point.label}</Text>
                            <Text size="sm" fw={500}>{`${point.value}${unit}`}</Text>
                        </Group>
                        <Progress value={width} color={point.color || 'blue'} size="lg" radius="sm" />
                    </div>
                );
            })}
        </Box>
    );
};

const FactChart = ({ chartData }: FactChartProps) => {
    return (
        <Box mt="md" p="md" bg="var(--mantine-color-gray-0)" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
            {chartData.type === 'donut' ? (
                <DonutChart data={chartData.data} unit={chartData.unit} />
            ) : (
                <BarChart data={chartData.data} unit={chartData.unit} />
            )}
        </Box>
    );
};

export default FactChart;