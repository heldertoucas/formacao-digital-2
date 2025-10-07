'use client';

import React from 'react';
import { Container, Title, Divider, Box, Group, Text } from '@mantine/core';

// Import all the ported components
import Button from '@/components/ia-ported/ui/Button';
import Card from '@/components/ia-ported/ui/Card';
import Accordion from '@/components/ia-ported/ui/Accordion';
import TabbedContent from '@/components/ia-ported/ui/TabbedContent';
import QuoteBlock from '@/components/ia-ported/ui/QuoteBlock';
import Carousel from '@/components/ia-ported/ui/Carousel';
import SlideCarousel from '@/components/ia-ported/ui/SlideCarousel';
import PageSection from '@/components/ia-ported/layout/PageSection';
import LearningUnitLayout from '@/components/ia-ported/layout/LearningUnitLayout';
import MissionBlock from '@/components/ia-ported/learning/MissionBlock';
import InlineQuiz from '@/components/ia-ported/learning/InlineQuiz';
import SentenceBuilder from '@/components/ia-ported/learning/SentenceBuilder';
import StatsGroup from '@/components/ia-ported/showcase/StatsGroup';
import ProgressCard from '@/components/ia-ported/showcase/ProgressCard';
import FeatureGridSection from '@/components/ia-ported/showcase/FeatureGridSection';
import EmailCaptureBanner from '@/components/ia-ported/showcase/EmailCaptureBanner';
import GradientBorderCard from '@/components/ia-ported/showcase/GradientBorderCard';
import ListingCard from '@/components/ia-ported/showcase/ListingCard';
import PromptFactoryApp from '@/components/ia-ported/learning/prompt-factory/PromptFactoryApp';
import ManifestoCoCreationPage from '@/components/ia-ported/pages/ManifestoCoCreationPage';

const ComponentWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Box my="xl">
        <Title order={3} mb="md">{title}</Title>
        <Divider mb="md" />
        {children}
    </Box>
);

const IAPortedLibrary = () => {
  const exampleSlides = [
    {
      backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      title: "Capacitação Contínua",
      text: "Oferecemos formações desenhadas para o setor público, focadas em competências digitais e inovação.",
      cta: { label: "Ver Cursos", href: "#", icon: 'book-open-line' }
    },
    {
      backgroundImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      title: "Comunidade e Colaboração",
      text: "Junte-se a uma rede de profissionais dedicados a construir um futuro mais eficiente e humano.",
    }
  ];

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl">IA Ported Component Library</Title>

      <ComponentWrapper title="Button">
        <Group>
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </Group>
      </ComponentWrapper>

      <ComponentWrapper title="Card">
        <Card>This is a simple card component.</Card>
      </ComponentWrapper>

      <ComponentWrapper title="Accordion">
        <Accordion items={[{ value: '1', control: 'Accordion Item 1', panel: 'This is the content of the first accordion item.' }]} />
      </ComponentWrapper>

      <ComponentWrapper title="TabbedContent">
        <TabbedContent items={[{ value: '1', label: 'Tab 1', content: 'This is the content of the first tab.' }, { value: '2', label: 'Tab 2', content: 'This is the content of the second tab.' }]} />
      </ComponentWrapper>

      <ComponentWrapper title="QuoteBlock">
        <QuoteBlock quote="This is a quote." author="John Doe" />
      </ComponentWrapper>

      <ComponentWrapper title="Carousel">
        <Carousel>
          <Box bg="blue.1" h={200} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 1</Box>
          <Box bg="red.1" h={200} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 2</Box>
        </Carousel>
      </ComponentWrapper>

      <ComponentWrapper title="SlideCarousel">
        <SlideCarousel slides={exampleSlides} />
      </ComponentWrapper>

      <ComponentWrapper title="PageSection">
        <PageSection title="This is a Page Section" subtitle="This is a subtitle.">
          <Text>This is the content of the page section.</Text>
        </PageSection>
      </ComponentWrapper>

      <ComponentWrapper title="LearningUnitLayout">
        <LearningUnitLayout sidebar={<Box>Sidebar</Box>}>
          <Box>Main Content</Box>
        </LearningUnitLayout>
      </ComponentWrapper>

      <ComponentWrapper title="MissionBlock">
        <MissionBlock category="aprender" title="Aprender">
          This is a learning mission block.
        </MissionBlock>
      </ComponentWrapper>

      <ComponentWrapper title="InlineQuiz">
        <InlineQuiz
          question="What is the capital of France?"
          options={[{ text: 'Paris', isCorrect: true }, { text: 'London', isCorrect: false }]}
          correctFeedback="Correct!"
          incorrectFeedback="Incorrect!"
        />
      </ComponentWrapper>

      <ComponentWrapper title="SentenceBuilder">
        <SentenceBuilder />
      </ComponentWrapper>

      <ComponentWrapper title="StatsGroup">
        <StatsGroup />
      </ComponentWrapper>

      <ComponentWrapper title="ProgressCard">
        <ProgressCard />
      </ComponentWrapper>

      <ComponentWrapper title="FeatureGridSection">
        <FeatureGridSection />
      </ComponentWrapper>

      <ComponentWrapper title="EmailCaptureBanner">
        <EmailCaptureBanner />
      </ComponentWrapper>

      <ComponentWrapper title="GradientBorderCard">
        <GradientBorderCard />
      </ComponentWrapper>

      <ComponentWrapper title="ListingCard">
        <ListingCard />
      </ComponentWrapper>

      <ComponentWrapper title="PromptFactoryApp">
        <PromptFactoryApp />
      </ComponentWrapper>
      
      <ComponentWrapper title="ManifestoCoCreationPage">
        <ManifestoCoCreationPage />
      </ComponentWrapper>

    </Container>
  );
};

export default IAPortedLibrary;