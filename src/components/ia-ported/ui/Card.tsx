
import React from 'react';
import { Card as MantineCard, CardProps as MantineCardProps } from '@mantine/core';

// Define our custom CardProps
export type CardProps = MantineCardProps & {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <MantineCard
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={className}
      {...props}
    >
      {children}
    </MantineCard>
  );
};

export default Card;
