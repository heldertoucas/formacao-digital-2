
import React from 'react';
import { Grid, Container } from '@mantine/core';

export type LearningUnitLayoutProps = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const LearningUnitLayout = ({ children, sidebar }: LearningUnitLayoutProps) => {
  return (
    <Container>
      <Grid>
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <main>{children}</main>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <aside>{sidebar}</aside>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default LearningUnitLayout;
