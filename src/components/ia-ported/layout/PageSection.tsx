
import React from 'react';
import { Container, Title, Text, Box, BoxProps } from '@mantine/core';

export type PageSectionProps = BoxProps & {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const PageSection = ({ title, subtitle, children, className, ...props }: PageSectionProps) => {
  return (
    <Box component="section" py="xl" className={className} {...props}>
      <Container>
        <Box ta="center">
          <Title order={2} size="h1">{title}</Title>
          {subtitle && (
            <Text size="lg" c="dimmed" mt="md" maw="60rem" mx="auto">
              {subtitle}
            </Text>
          )}
        </Box>
        <Box mt="xl">
            {children}
        </Box>
      </Container>
    </Box>
  );
};

export default PageSection;
