'use client';

import { AppShell, Group, Anchor, Title } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import Link from 'next/link';
import React from 'react';

export function SiteHeader() {
  const [scroll, scrollTo] = useWindowScroll();

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      scrollTo({ y: targetElement.offsetTop });
    }
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Group>
          <Title order={3}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Formação Digital
            </Link>
          </Title>
        </Group>
        <Group>
          <Anchor href="#about" fz="sm" onClick={(e) => handleScrollTo(e, 'about')}>
            About
          </Anchor>
          <Anchor href="#contact" fz="sm" onClick={(e) => handleScrollTo(e, 'contact')}>
            Contact
          </Anchor>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
