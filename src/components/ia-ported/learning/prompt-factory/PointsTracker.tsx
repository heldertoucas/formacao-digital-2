'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Text, Progress, Button, Group } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';

type PointsTrackerProps = {
  points: number;
  goal: number;
  isMedalUnlocked: boolean;
};

const PointsTracker = ({ points, goal, isMedalUnlocked }: PointsTrackerProps) => {
  const [isHighlighting, setIsHighlighting] = useState(false);
  const isInitialMount = useRef(true);

  const progressPercentage = Math.min((points / goal) * 100, 100);

  useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    
    if (isMedalUnlocked) return;

    setIsHighlighting(true);
    const timer = setTimeout(() => {
      setIsHighlighting(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [points, isMedalUnlocked]);

  if (isMedalUnlocked) {
    return (
      <Box p="sm" bg="var(--mantine-color-gray-0)" style={{ borderRadius: 'var(--mantine-radius-md)' }}>
        <Group justify="space-between">
          <Text size="sm" fw={500}>Progresso</Text>
          <Text size="sm" fw={700} c="blue">{points} / {goal} Pontos</Text>
        </Group>
        <Progress value={progressPercentage} mt={5} mb="sm" />
        <Button
          component="a"
          href="https://lisbon.cityoflearning.eu/claim?code=5f8ica&qr=1"
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          variant="light"
          color="yellow"
          leftSection={<RemixIcon name="award-fill" />}
        >
          Recolher Medalha
        </Button>
      </Box>
    );
  }

  return (
    <Box p="sm" bg={isHighlighting ? 'var(--mantine-color-blue-0)' : 'var(--mantine-color-gray-0)'} style={{ borderRadius: 'var(--mantine-radius-md)', transition: 'background-color 0.3s ease' }}>
        <Group justify="space-between">
            <Text size="sm" fw={500}>Progresso</Text>
            <Text size="sm" fw={700} c="blue">{points} / {goal} Pontos</Text>
        </Group>
        <Progress value={progressPercentage} mt={5} />
    </Box>
  );
};

export default PointsTracker;