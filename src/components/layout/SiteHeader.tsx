'use client';

import { AppShell, Group, Anchor, Title } from '@mantine/core';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Group>
          {/* Using a simple Title for the logo/brand name for now */}
          <Title order={3}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Formação Digital
            </Link>
          </Title>
        </Group>
        <Group>
          <Anchor href="#about" fz="sm">
            About
          </Anchor>
          <Anchor href="#contact" fz="sm">
            Contact
          </Anchor>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
