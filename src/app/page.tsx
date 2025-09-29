'use client';

import { Title, Text, Container, Grid, SimpleGrid, Box, Button, Stack, Group, ActionIcon, ThemeIcon, Anchor } from '@mantine/core';
import { Card } from '@/components/common/Card';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { IconMail, IconPhone, IconMapPin, IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';

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

function AboutSection() {
  return (
    <Box component="section" id="about" mt={{ base: 'xl', md: '5rem' }}>
      <Container size="md">
        <Stack gap="lg">
          <Title order={2} ta="center">
            A Nossa Missão: Capacitar Lisboa para um Futuro Digital e Inclusivo
          </Title>
          <Text ta="center" c="dimmed">
            Em Lisboa, como em todo o país, o fosso digital é um desafio real que afeta a participação cívica e a igualdade de oportunidades. Foi para responder a esta realidade que a Câmara Municipal de Lisboa criou, em 2017, o Programa para a Inclusão e Literacia Digital (PILD). A nossa missão é clara: desmistificar a tecnologia e transformá-la numa ferramenta de empoderamento para todos. Acreditamos que a literacia digital é um direito fundamental na sociedade atual. Por isso, desenhámos percursos de aprendizagem como o Passaporte Competências Digitais, o Futuro Digital e o IA para Todos para serem acessíveis, práticos e, acima de tudo, centrados nas pessoas. Utilizamos metodologias inovadoras, como a gamificação e a certificação através de Open Badges, para criar uma experiência de aprendizagem motivadora e reconhecida. Mais do que ensinar a usar ferramentas, queremos inspirar a confiança, promover o pensamento crítico e construir uma comunidade onde ninguém fica para trás. Junte-se a nós nesta missão. Juntos, estamos a construir uma Lisboa mais conectada, mais justa e mais preparada para o amanhã.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

function ContactSection() {
  return (
    <Box component="section" id="contact" mt={{ base: 'xl', md: '5rem' }} py="xl" bg="var(--mantine-color-gray-1)">
      <Container size="md">
        <Stack align="center" gap="lg">
          <Title order={2} ta="center">
            Fale Connosco
          </Title>
          <Text ta="center" c="dimmed">
            Tem alguma dúvida sobre os nossos programas? Uma sugestão para melhorarmos? Ou representa uma organização e gostaria de explorar uma parceria? Saiba como nos contactar.
          </Text>
          
          <Stack mt="xl" gap="md">
            <Group>
              <ThemeIcon variant="light" size="lg"><IconMail /></ThemeIcon>
              <Anchor href="mailto:formacaodigital@cm-lisboa.pt">
                formacaodigital@cm-lisboa.pt
              </Anchor>
            </Group>
            <Group>
              <ThemeIcon variant="light" size="lg"><IconPhone /></ThemeIcon>
              <Text>+351 21 817 40 50</Text>
            </Group>
            <Group>
              <ThemeIcon variant="light" size="lg"><IconMapPin /></ThemeIcon>
              <Text>Departamento de Desenvolvimento e Formação, Rua António Patrício, 26, 3º Andar, 1700-049 Lisboa</Text>
            </Group>
          </Stack>

          <Group mt="xl">
            <ActionIcon component="a" href="#" variant="default" size="lg">
              <IconBrandFacebook />
            </ActionIcon>
            <ActionIcon component="a" href="#" variant="default" size="lg">
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon component="a" href="#" variant="default" size="lg">
              <IconBrandInstagram />
            </ActionIcon>
          </Group>
        </Stack>
      </Container>
    </Box>
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

      <AboutSection />

      <TestimonialsSection />

      <ContactSection />
    </Container>
  );
}
