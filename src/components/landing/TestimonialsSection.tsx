'use client';

import { Card, Text, Group, Stack, Container, Title, SimpleGrid, ThemeIcon, Box } from "@mantine/core";
import { IconQuote } from '@tabler/icons-react';
import classes from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote: "Eu pensava que a tecnologia não era para mim, mas este programa mudou tudo. Hoje, marco consultas online, comunico com a minha família por vídeo e até já sei identificar notícias falsas. Deu-me uma nova esperança e independência.",
    author: "Alberto Marques",
    role: "48 anos, Participante",
  },
  {
    quote: "Depois de concluir o Passaporte, sentia que precisava de mais para me destacar profissionalmente. O Futuro Digital deu-me competências avançadas em ferramentas de colaboração e análise de dados que comecei a aplicar imediatamente no meu trabalho. Foi um verdadeiro acelerador de carreira!",
    author: "Sofia Andrade",
    role: "35 anos, Gestora de Projetos",
  },
  {
    quote: "Sempre ouvi falar de Inteligência Artificial com um misto de curiosidade e receio. O programa 'IA para Todos' foi uma revelação. Aprendi a usar ferramentas que poupam horas de trabalho na gestão da minha loja e a compreender as implicações éticas desta tecnologia. Sinto-me preparado para o futuro.",
    author: "Rui Costa",
    role: "52 anos, Comerciante",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card shadow="lg" radius="md" className={classes.testimonialCard} padding="xl">
      <Stack align="center" gap="md">
        <ThemeIcon className={classes.quoteIcon} size={50} radius="xl">
          <IconQuote style={{ width: '60%', height: '60%' }} />
        </ThemeIcon>
        <Text className={classes.testimonialQuote}>
          "{testimonial.quote}"
        </Text>
        <Stack align="center" gap={0}>
          <Text className={classes.authorName}>{testimonial.author}</Text>
          <Text className={classes.authorRole}>{testimonial.role}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};

export function TestimonialsSection() {
  return (
    <Box component="section" id="testimonials" mt={{ base: 'xl', md: '5rem' }}>
        <Container size="xl" py="xl">
            <Stack align="center" mb="xl">
                <Title order={2} className={classes.sectionTitle}>
                O Que a Nossa Comunidade Diz
                </Title>
            </Stack>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
                {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </SimpleGrid>
        </Container>
    </Box>
  );
}
