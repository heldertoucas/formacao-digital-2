
import React from 'react';
import { SimpleGrid, Box, Title, Text, Group, Rating } from '@mantine/core';
import RemixIcon from '../../ui/RemixIcon';
import { Category, Recipe } from '../../../../types/prompt-factory';

type RecipeSelectorProps = {
  recipes: Recipe[];
  category: Category | undefined;
  onSelectRecipe: (recipe: Recipe) => void;
};

const RecipeSelector = ({ recipes, category, onSelectRecipe }: RecipeSelectorProps) => {

  const calculateAverageRating = (recipe: Recipe) => {
    if (recipe.vote_count === 0) return 0;
    return (recipe.total_score / recipe.vote_count);
  }

  return (
     <Box style={{ textAlign: 'center' }}>
        <RemixIcon name="award-line" className="text-4xl text-pcd-accent mb-2" />
        <Title order={2} size="h1">
            Receitas de Sucesso para <Text span c="blue">{category?.title || 'a sua Tarefa'}</Text>
        </Title>
        <Text c="dimmed" mt="sm" mb="xl" size="lg" maw="35rem" mx="auto">
            Escolha um ponto de partida. Cada receita é um atalho para um resultado fantástico.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
            {recipes.map((recipe, index) => {
                const rating = calculateAverageRating(recipe);
                const isPopular = rating >= 4.0 && recipe.vote_count >= 3;
                return (
                     <Box
                        key={recipe.id}
                        component="button"
                        onClick={() => onSelectRecipe(recipe)}
                        style={{
                            padding: 'var(--mantine-spacing-lg)',
                            backgroundColor: 'var(--mantine-color-body)',
                            borderRadius: 'var(--mantine-radius-md)',
                            textAlign: 'left',
                            border: '1px solid var(--mantine-color-gray-2)',
                            transition: 'all 0.3s ease',
                        }}
                        className="hover:border-pcd-accent hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pcd-accent"
                    >
                        <Group justify="space-between">
                            <Group>
                                <Box bg="blue.0" p="sm" style={{ borderRadius: 'var(--mantine-radius-sm)' }}>
                                   <RemixIcon name={recipe.icon_name} className="text-3xl text-pcd-accent" />
                                </Box>
                                <div>
                                    <Text fw={500} fz="lg">{recipe.title}</Text>
                                    {isPopular && <Badge color="yellow" size="sm" mt={4}>POPULAR</Badge>}
                                </div>
                            </Group>
                        </Group>
                        <Group justify="space-between" mt="md" pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                            <Rating value={rating} fractions={2} readOnly />
                            <Text c="dimmed" size="sm">({recipe.vote_count} avaliações)</Text>
                        </Group>
                    </Box>
                )
            })}
        </SimpleGrid>
    </Box>
  );
};

export default RecipeSelector;
