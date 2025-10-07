import { CSSVariablesResolver } from '@mantine/core';

export const professionalCssVariableResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-font-family': 'sans-serif',
  },
  light: {
    '--mantine-color-body': theme.white,
    '--mantine-color-text': theme.colors.gray[8],
    '--mantine-color-primary': theme.colors.professionalBlue[6],
    '--mantine-color-secondary': theme.colors.gray[5],
  },
  dark: {
    '--mantine-color-body': theme.colors.dark[7],
    '--mantine-color-text': theme.colors.dark[0],
    '--mantine-color-primary': theme.colors.professionalBlue[8],
    '--mantine-color-secondary': theme.colors.dark[2],
  },
});
