
import React from 'react';
import { Paper, Title, Text, TextInput, Button, Group } from '@mantine/core';

const EmailCaptureBanner = () => {
    return (
        <Paper withBorder p="xl" radius="md">
            <Group justify="space-between" align="center">
                <div style={{ flex: 1 }}>
                    <Title order={2}>Wait a minute...</Title>
                    <Text size="xl" fw={500} mt="sm">Subscribe to our newsletter!</Text>
                    <Text c="dimmed" mt="xs">
                        You will never miss important product updates, latest news and community QA sessions. Our newsletter is once a week, every Sunday.
                    </Text>
                    <Group mt="lg">
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Your email"
                            aria-label="Email"
                        />
                        <Button size="md">Subscribe</Button>
                    </Group>
                </div>
                <div style={{ flexShrink: 0, width: '33.333333%' }}>
                    <img 
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/docs/src/components/EmailBanner/image.svg" 
                        alt="Illustration of people sitting on a giant envelope" 
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </Group>
        </Paper>
    );
};

export default EmailCaptureBanner;
