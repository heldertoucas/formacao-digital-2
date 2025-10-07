
import React from 'react';
import { Carousel } from '@mantine/carousel';
import PageSection from '../layout/PageSection';
import GuidelineCard from '../ui/GuidelineCard';

const ResponsibleAiUsageSection = () => {
    const guidelines = [
        {
            icon: 'brain-line',
            title: 'Pense criticamente e mantenha-se curioso.',
            description: 'Não deixe que a IA decida por si. Pode dar respostas incorretas ou baseadas em preconceitos.'
        },
        {
            icon: 'shield-check-line',
            title: 'Seja claro sobre quando usa IA.',
            description: 'Reconhecer o uso da IA é sinal de transparência e honestidade.'
        },
        {
            icon: 'user-heart-line',
            title: 'Respeite os outros ao usar IA.',
            description: 'Use a IA para colaborar, não para espalhar desinformação ou ludibriar.'
        },
        {
            icon: 'lock-password-line',
            title: 'Proteja a sua privacidade.',
            description: 'Nunca introduza dados pessoais, senhas ou informações confidenciais na IA.'
        },
        {
            icon: 'megaphone-line',
            title: 'Avise se vir algo preocupante.',
            description: 'Se encontrar conteúdo inapropriado, use a opção "denunciar" na página da IA.'
        },
        {
            icon: 'book-copy-line',
            title: 'Use a IA para aprender, não para copiar.',
            description: 'Valorize sempre o seu pensamento e as suas palavras.'
        },
    ];

    const slides = guidelines.map(guideline => (
        <Carousel.Slide key={guideline.title}>
            <GuidelineCard {...guideline} />
        </Carousel.Slide>
    ));

    return (
        <PageSection id="responsible-use" title={<>Uso Responsável da <span className="text-pcd-accent">IA</span></>} subtitle="Seguir estas regras simples garante uma interação mais segura, ética e produtiva com as ferramentas de Inteligência Artificial." bg="gray.0">
            <Carousel
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"
            >
                {slides}
            </Carousel>
        </PageSection>
    );
};

export default ResponsibleAiUsageSection;
