'use client';

import { AppShell, Group, Text, Anchor, ActionIcon, Stack } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';

export function SiteFooter() {
  return (
    <AppShell.Footer p="md">
      <Group justify="space-between">
        <Stack gap="xs">
          <Text size="sm">© {new Date().getFullYear()} Formação Digital CML</Text>
          <Anchor href="mailto:formacaodigital@cm-lisboa.pt" size="sm">
            formacaodigital@cm-lisboa.pt
          </Anchor>
          <Text size="sm">+351 21 817 40 50</Text>
          <Text size="sm">Departamento de Desenvolvimento e Formação, Rua António Patrício, 26, 3º Andar, 1700-049 Lisboa</Text>
        </Stack>
        <Group>
          <ActionIcon component="a" href="#" variant="subtle" color="gray">
            <IconBrandFacebook size={18} />
          </ActionIcon>
          <ActionIcon component="a" href="#" variant="subtle" color="gray">
            <IconBrandLinkedin size={18} />
          </ActionIcon>
          <ActionIcon component="a" href="#" variant="subtle" color="gray">
            <IconBrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Group>
    </AppShell.Footer>
  );
}
