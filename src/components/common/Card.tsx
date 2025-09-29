'use client';

import { Card as MantineCard, Text, Title, Group, Stack } from '@mantine/core';
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function Card({ title, children, actions, className }: CardProps) {
  return (
    <MantineCard shadow="sm" padding="lg" radius="md" withBorder className={className} h="100%">
        <Stack justify="space-between" h="100%">
            <Stack>
                {title && (
                    <Title order={4}>{title}</Title>
                )}
                {children}
            </Stack>

            {actions && (
                <Group justify="flex-end" mt="md">
                    {actions}
                </Group>
            )}
      </Stack>
    </MantineCard>
  );
}
