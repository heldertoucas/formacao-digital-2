import { createTheme, MantineColorsTuple } from '@mantine/core';

const professionalBlue: MantineColorsTuple = [
  '#e7f5ff',
  '#d0ebff',
  '#a5d8ff',
  '#74c0fc',
  '#4dabf7',
  '#339af0',
  '#228be6',
  '#1c7ed6',
  '#1971c2',
  '#1864ab'
];

export const professionalTheme = createTheme({
  primaryColor: 'professionalBlue',
  colors: {
    professionalBlue,
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        shadow: 'md',
        padding: 'xl',
        withBorder: true,
      },
    },
  },
});
