
import React from 'react';
import { Carousel as MantineCarousel, CarouselProps as MantineCarouselProps } from '@mantine/carousel';
import '@mantine/carousel/styles.css';

// Define our custom CarouselProps
export type CarouselProps = Omit<MantineCarouselProps, 'children'> & {
  children: React.ReactNode;
  className?: string;
};

const Carousel = ({ children, className, ...props }: CarouselProps) => {
  return (
    <MantineCarousel className={className} {...props}>
      {React.Children.map(children, (child, index) => (
        <MantineCarousel.Slide key={index}>{child}</MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
};

export default Carousel;
