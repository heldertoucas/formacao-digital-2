'use client';

import { MantineProvider } from '@mantine/core';
import { indigoTheme, indigoCssVariableResolver } from '@/themes';
import '@/themes/indigo/style.css';
import '@mantine/core/styles.css';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={indigoTheme} cssVariablesResolver={indigoCssVariableResolver}>
      {children}
    </MantineProvider>
  );
}
