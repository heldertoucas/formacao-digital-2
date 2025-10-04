import { Card, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container py="xl">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="center">
          <Title order={1}>404</Title>
        </Group>
        <Text c="dimmed" size="lg" ta="center" mt="md">
          Oops! The page you are looking for does not exist.
        </Text>
        <Group justify="center" mt="xl">
          <Button component={Link} href="/" variant="outline">
            Go back to Home
          </Button>
        </Group>
      </Card>
    </Container>
  );
}
