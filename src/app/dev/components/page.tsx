'use client';

import { Accordion, Title, Container, Space, Box, Group, ColorSwatch, Text } from '@mantine/core';
import { indigoTheme } from '@/themes'; // Import the theme

// Helper component to display a color palette
function ColorPalette({ colorName, colors }) {
  const swatches = colors.map((color, index) => (
    <ColorSwatch key={`${colorName}-${index}`} color={color} size={50} radius="sm" />
  ));

  return (
    <Box mb="md">
      <Text tt="capitalize" fw={500} mb="xs">{colorName}</Text>
      <Group gap="xs">
        {swatches}
      </Group>
    </Box>
  );
}

// Component to display all theme colors
function ThemeColors() {
  // We only want to display the named color tuples, not the semantic assignments like 'primary'
  const themeColors = Object.entries(indigoTheme.colors).filter(
    ([, value]) => Array.isArray(value)
  );

  return (
    <Box>
      {themeColors.map(([name, shades]) => (
        <ColorPalette key={name} colorName={name} colors={shades} />
      ))}
    </Box>
  );
}


// Data for the Accordion component
const accordionData = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];

// Accordion Demo Component
function AccordionDemo() {
  const items = accordionData.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples">
      {items}
    </Accordion>
  );
}


// Main page component for the component library
export default function ComponentLibraryPage() {
  return (
    <Container fluid p="xl">
      <Title order={1} mb="xl">
        Component & Theme Library
      </Title>

      <Title order={2} mb="md">
        Theme Colors
      </Title>
      <ThemeColors />

      <Space h="xl" />

      <Title order={2} mb="md">
        Accordion
      </Title>
      <AccordionDemo />

      <Space h="xl" />

      {/* New components will be added here */}
    </Container>
  );
}
