'use client';

import { Title, Text, Container, Grid, Box, Button, Stack, Group, ActionIcon, ThemeIcon, Anchor, Image } from '@mantine/core';
import { Card } from '@/components/common/Card';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/ia-ported/sections/TestimonialsSection';
import { IconMail, IconPhone, IconMapPin, IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram, IconCertificate, IconArrowUpRight, IconCpu } from '@tabler/icons-react';

function HeroIllustration() {
  return (
    <Image
      src="https://via.placeholder.com/500x300.png?text=Hero+Illustration"
      alt="Digital literacy illustration"
      radius="md"
    />
  );
}

import AboutV1_Storyteller from '@/components/ia-ported/about/AboutV1_Storyteller';

const AboutSection = AboutV1_Storyteller;

import Footer from '@/components/ia-ported/layout/Footer';

export default function HomePage() {
  return (
    <Stack gap="0">
      <Container size="xl" py={{ base: '2rem', md: '5rem' }}>
        {/* --- Hero Section --- */}
        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg">
              <Title order={1} style={{ fontSize: '4.5rem', lineHeight: 1.1, fontWeight: 900 }}>
                Faça Clique em si.
              </Title>
              <Text size="xl" c="dimmed">
                Invista nas suas competências digitais, explore a oferta de formação gratuita da CMLisboa e transforme o seu futuro.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <HeroIllustration />
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" py={{ base: '2rem', md: '5rem' }}>
        {/* --- Program Cards Section --- */}
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              title="Comece a sua Jornada"
              actions={
                <Link href="/passaporte" passHref>
                  <Button size="lg" variant="filled" color="professionalBlue">Saber Mais e Inscrever-se</Button>
                </Link>
              }
            >
              <Group mb="md">
                <ThemeIcon variant="light" size="xl"><IconCertificate /></ThemeIcon>
                <Title order={3}>Passaporte Digital</Title>
              </Group>
              <Text c="dimmed">
                Adquira as 10 competências digitais essenciais para navegar no dia a dia com confiança. Desde usar o telemóvel e comunicar online, até tratar de serviços públicos e criar conteúdos. Um programa de base, prático e para todos.
              </Text>
              <Text size="sm" mt="md">
                <strong>Ideal for:</strong> Cidadãos que procuram a sua primeira experiência no mundo digital ou que desejam consolidar conhecimentos fundamentais.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card
              title="Acelere as Suas Competências"
              actions={
                <Link href="/futuro" passHref>
                  <Button size="md" variant="outline">Ver Detalhes</Button>
                </Link>
              }
            >
              <Group mb="md">
                <ThemeIcon variant="light" size="xl"><IconArrowUpRight /></ThemeIcon>
                <Title order={4}>Futuro Digital</Title>
              </Group>
              <Text c="dimmed">
                Aprofunde os seus conhecimentos e prepare-se para os desafios do mercado de trabalho.
              </Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card
              title="Explore a Revolução da IA"
              actions={
                <Link href="/ia" passHref>
                  <Button size="md" variant="outline">Explorar o Futuro</Button>
                </Link>
              }
            >
              <Group mb="md">
                <ThemeIcon variant="light" size="xl"><IconCpu /></ThemeIcon>
                <Title order={4}>IA para Todos</Title>
              </Group>
              <Text c="dimmed">
                Desmistifique a Inteligência Artificial e aprenda a utilizá-la de forma ética e criativa.
              </Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <AboutSection />

      <TestimonialsSection />

      <Footer onShowAllResources={() => {}} />
    </Stack>
  );
}