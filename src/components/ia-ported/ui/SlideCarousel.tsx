
import React from 'react';
import Carousel from './Carousel';
import RemixIcon from './RemixIcon';
import { Box, Title, Text, Button, Group } from '@mantine/core';
import Link from 'next/link';

export type Slide = {
    backgroundImage: string;
    title: string;
    text: string;
    cta?: {
        label: string;
        href: string;
        icon?: string;
    };
};

type SlideCarouselProps = {
    slides: Slide[];
};

const SlideCarousel = ({ slides }: SlideCarouselProps) => {
    return (
        <Carousel withIndicators loop>
            {slides.map((slide, index) => (
                <Box
                    key={index}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '500px',
                        backgroundImage: `url(${slide.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)',
                        }}
                    />
                    <Box
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            padding: 'var(--mantine-spacing-xl)',
                            color: 'white',
                            width: '100%',
                            maxWidth: '66.666667%',
                        }}
                    >
                        <Title order={2} style={{ color: 'white' }}>{slide.title}</Title>
                        <Text size="lg" mt="sm" style={{ color: 'rgba(255,255,255,0.9)' }}>{slide.text}</Text>
                        {slide.cta && (
                            <Button 
                                component={Link} 
                                href={slide.cta.href} 
                                mt="xl" 
                                size="lg" 
                                radius="xl"
                                leftSection={slide.cta.icon ? <RemixIcon name={slide.cta.icon} /> : undefined}
                            >
                                {slide.cta.label}
                            </Button>
                        )}
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
};

export default SlideCarousel;
