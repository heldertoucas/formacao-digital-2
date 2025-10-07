
import React from 'react';
import { Card, Text, Title, ThemeIcon } from '@mantine/core';
import RemixIcon from '../ui/RemixIcon';

const GradientBorderCard = () => {
    return (
        <Card withBorder radius="md" padding="xl" style={{ position: 'relative' }}>
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '6px',
                    backgroundImage: 'linear-gradient(to bottom, var(--mantine-color-pink-5), var(--mantine-color-orange-5))',
                    borderTopLeftRadius: 'var(--mantine-radius-md)',
                    borderBottomLeftRadius: 'var(--mantine-radius-md)',
                }}
            />
            <div style={{ paddingLeft: 'calc(var(--mantine-spacing-xl) + 6px)' }}>
                <ThemeIcon
                    size={64}
                    radius="md"
                    variant="gradient"
                    gradient={{ from: 'pink', to: 'orange' }}
                >
                    <RemixIcon name="paint-brush-line" className="text-4xl" />
                </ThemeIcon>
                <Title order={3} mt="md">
                    Theming documentation
                </Title>
                <Text mt="sm" c="dimmed">
                    Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements. Mantine theme is just an object, you can subscribe to it in any part of application via context and use it to build your own components.
                </Text>
            </div>
        </Card>
    );
};

export default GradientBorderCard;
