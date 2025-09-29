'use client';

import { Title, Text, Container, Grid, SimpleGrid, Box, Button } from '@mantine/core';
import { Card } from '@/components/common/Card';
import Link from 'next/link';

// Placeholder for the main illustration
function HeroIllustration() {
  return (
    <Box
      style={{
        height: 300,
        backgroundColor: 'var(--mantine-color-gray-1)',
        borderRadius: 'var(--mantine-radius-md)',
      }}
    />
  );
}

export default function HomePage() {
  return (
    <Container size="xl" py="xl">
      {/* --- Hero Section --- */}
      <Grid align="center" gutter="xl">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Title order={1} style={{ fontSize: '3.5rem', lineHeight: 1.1 }}>
            Faça Clique em si.
          </Title>
          <Text size="lg" mt="xl">
            Invista nas suas competências digitais, explore a oferta de formação gratuita da CMLisboa e transforme o seu futuro.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <HeroIllustration />
        </Grid.Col>
      </Grid>

      {/* --- Program Cards Section --- */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="xl"
        mt={{ base: 'xl', md: '5rem' }}
      >
        {/* Card 1: Passaporte */}
        <Card
          title="Comece a sua Jornada"
          actions={
            <Link href="/passaporte" passHref>
              <Button component="a">Saber Mais e Inscrever-se</Button>
            </Link>
          }
        >
          <Text size="sm" c="dimmed">
            Adquira as 10 competências digitais essenciais para navegar no dia a dia com confiança. Desde usar o telemóvel e comunicar online, até tratar de serviços públicos e criar conteúdos. Um programa de base, prático e para todos.
          </Text>
          <Text size="xs" mt="sm">
            <strong>Ideal for:</strong> Cidadãos que procuram a sua primeira experiência no mundo digital ou que desejam consolidar conhecimentos fundamentais.
          </Text>
        </Card>

        {/* Card 2: Futuro Digital */}
        <Card
          title="Acelere as Suas Competências"
          actions={
            <Link href="/futuro" passHref>
              <Button component="a">Ver Detalhes do Programa</Button>
            </Link>
          }
        >
          <Text size="sm" c="dimmed">
            Aprofunde os seus conhecimentos e prepare-se para os desafios do mercado de trabalho. Com base nas 10 competências do Passaporte, este programa eleva a sua proficiência para um nível intermédio e avançado em ferramentas colaborativas, análise de dados e muito mais.
          </Text>
          <Text size="xs" mt="sm">
            <strong>Ideal for:</strong> Quem já concluiu o Passaporte ou possui competências básicas e procura evoluir profissionalmente.
          </Text>
        </Card>

        {/* Card 3: IA para Todos */}
        <Card
          title="Explore a Revolução da Inteligência Artificial"
          actions={
            <Link href="/ia" passHref>
              <Button component="a">Explorar o Futuro da IA</Button>
            </Link>
          }
        >
          <Text size="sm" c="dimmed">
            Desmistifique a Inteligência Artificial e aprenda a utilizá-la de forma ética e criativa no seu trabalho e vida pessoal. Um programa inovador que lhe dá as ferramentas para aumentar a produtividade e compreender o futuro da tecnologia.
          </Text>
          <Text size="xs" mt="sm">
            <strong>Ideal for:</strong> Profissionais, estudantes e todos os cidadãos curiosos que desejam liderar na era da IA.
          </Text>
        </Card>
      </SimpleGrid>

      {/* Other sections will go here */}
    </Container>
  );
}
