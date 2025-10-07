'use client';

import { MantineProvider } from '@mantine/core';
import { professionalTheme } from '@/themes/professional/theme';
import { professionalCssVariableResolver } from '@/themes/professional/cssVariableResolver';
import '@/themes/professional/style.css';
import '@mantine/core/styles.css';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={professionalTheme} cssVariablesResolver={professionalCssVariableResolver}>
      {children}
    </MantineProvider>
  );
}
