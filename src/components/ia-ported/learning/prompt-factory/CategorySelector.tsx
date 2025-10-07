
import React from 'react';
import { SimpleGrid, Box, Title, Text } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';
import { Category } from '../../../../types/prompt-factory';


type CategorySelectorProps = {
  categories: Category[];
  onSelectCategory: (categoryId: string) => void;
};

const CategorySelector = ({ categories, onSelectCategory }: CategorySelectorProps) => {
  return (
    <Box style={{ textAlign: 'center' }}>
        <RemixIcon name="pencil-ruler-2-line" className="text-4xl text-pcd-accent mb-2" />
        <Title order={2} size="h1">Vamos Começar a Criar?</Title>
        <Text c="dimmed" mt="sm" mb="xl" size="lg" maw="30rem" mx="auto">
            O primeiro passo é simples: selecione o tipo de tarefa que tem em mente.
        </Text>

        <SimpleGrid cols={{ base: 2, md: 3 }} spacing="md">
            {categories.map((category, index) => (
                <Box
                    key={category.id}
                    component="button"
                    onClick={() => onSelectCategory(category.id)}
                    style={{
                        padding: 'var(--mantine-spacing-lg)',
                        backgroundColor: 'var(--mantine-color-gray-0)',
                        borderRadius: 'var(--mantine-radius-md)',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        border: '1px solid var(--mantine-color-gray-2)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                    className="hover:bg-pcd-accent-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pcd-accent"
                >
                    <RemixIcon name={category.icon_name} className="text-3xl text-pcd-accent mb-3" />
                    <Text fw={500} fz="lg">{category.title}</Text>
                </Box>
            ))}
        </SimpleGrid>
    </Box>
  );
};

export default CategorySelector;
