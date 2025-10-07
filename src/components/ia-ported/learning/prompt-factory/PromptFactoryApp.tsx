'use client';

import React, { useState, useCallback } from 'react';
import { Box, LoadingOverlay, Group } from '@mantine/core';
import { Category, Recipe } from '../../../../types/prompt-factory';
import usePromptFactoryData from '../../../../lib/hooks/usePromptFactoryData';
import { api } from '../../../../services/prompt-factory-api';
import { useGamification } from '../../../../lib/hooks/useGamification';
import ProgressBar from './ProgressBar';
import CategorySelector from './CategorySelector';
import RecipeSelector from './RecipeSelector';
import PromptBuilder from './PromptBuilder';
import GenerationResult from './GenerationResult';
import PointsTracker from './PointsTracker';
import GamificationNotification from './GamificationNotification';
import MedalPopup from './MedalPopup';

type Step = 'category' | 'recipe' | 'create' | 'result';

const PromptFactoryApp = () => {
    const { categories, recipes, isLoading: isDataLoading } = usePromptFactoryData();
    const [currentStep, setCurrentStep] = useState<Step>('category');
    const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [finalGeneratedPrompt, setFinalGeneratedPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [generatedOutput, setGeneratedOutput] = useState('');

    const { points, addPoint, isMedalUnlocked, goal, notification, dismissNotification } = useGamification();

    const reset = useCallback(() => {
        setCurrentStep('category');
        setSelectedCategoryId(null);
        setSelectedRecipe(null);
        setGeneratedOutput('');
        setIsLoading(false);
        setFinalGeneratedPrompt('');
    }, []);
    
    const handleStepClick = (step: Step) => {
        if (step === 'category') {
           reset();
        }
        if (step === 'recipe' && selectedCategoryId) {
            setSelectedRecipe(null);
            setGeneratedOutput('');
            setCurrentStep('recipe');
        }
        if (step === 'create' && selectedRecipe) {
             setGeneratedOutput('');
            setCurrentStep('create');
        }
    };
    
    const handleSelectCategory = (categoryId: string) => {
        setSelectedCategoryId(categoryId);
        setCurrentStep('recipe');
    };

    const handleSelectRecipe = (recipe: Recipe) => {
        setSelectedRecipe(recipe);
        setCurrentStep('create');
    };

    const handleGenerate = useCallback(async (prompt: string, type: 'text' | 'image') => {
        setIsLoading(true);
        setGeneratedOutput('');
        setFinalGeneratedPrompt(prompt);
        setCurrentStep('result');

        try {
            if (type === 'image') {
                const imageDataUri = await api.generate(prompt, 'image', () => {});
                setGeneratedOutput(imageDataUri);
            } else {
                await api.generate(prompt, 'text', (chunk) => {
                    setGeneratedOutput(prev => prev + chunk);
                });
            }
        } catch(error) {
            console.error("Generation failed:", error);
            const fallbackIndex = Math.floor(Math.random() * (selectedRecipe?.fallback_outputs.length || 0));
            setGeneratedOutput(selectedRecipe?.fallback_outputs[fallbackIndex] || 'Ocorreu um erro ao gerar a resposta. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }

    }, [selectedRecipe]);

    const handleRate = useCallback(async (rating: number) => {
        if (!selectedRecipe) return;
        await api.rateRecipe(selectedRecipe.id, rating);
    }, [selectedRecipe]);
    
    const handleGenerationSuccess = useCallback(() => {
        addPoint();
    }, [addPoint]);

    const renderStep = () => {
        if (isDataLoading) {
            return <LoadingOverlay visible />;
        }
        switch (currentStep) {
            case 'category':
                return <CategorySelector categories={categories} onSelectCategory={handleSelectCategory} />;
            case 'recipe':
                const filteredRecipes = recipes.filter(r => r.categoryId === selectedCategoryId);
                const selectedCategory = categories.find(c => c.id === selectedCategoryId);
                return <RecipeSelector recipes={filteredRecipes} category={selectedCategory} onSelectRecipe={handleSelectRecipe} />;
            case 'create':
                 if (!selectedRecipe) return null;
                return <PromptBuilder recipe={selectedRecipe} onGenerate={handleGenerate} onCopyPrompt={addPoint} />;
            case 'result':
                if (!selectedRecipe) return null;
                return <GenerationResult 
                            recipe={selectedRecipe}
                            finalPrompt={finalGeneratedPrompt} 
                            generatedOutput={generatedOutput}
                            isLoading={isLoading}
                            onRate={handleRate}
                            onGenerationSuccess={handleGenerationSuccess}
                            onReset={reset}
                        />;
            default:
                return <CategorySelector categories={categories} onSelectCategory={handleSelectCategory} />;
        }
    };

    return (
        <Box p="md" style={{ position: 'relative' }}>
            {notification && (
                <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                    <GamificationNotification message={notification} onClose={dismissNotification} />
                </Box>
            )}
            <MedalPopup message={notification || ''} opened={isMedalUnlocked && !!notification} onClose={dismissNotification} />

            <Group justify="space-between" align="center" mb="xl">
                <Box style={{ flex: 1 }}>
                    <ProgressBar currentStep={currentStep} onStepClick={handleStepClick} />
                </Box>
                <Box style={{ flex: '0 0 200px' }}>
                    <PointsTracker points={points} goal={goal} isMedalUnlocked={isMedalUnlocked} />
                </Box>
            </Group>
            <Box mt="xl">
                {renderStep()}
            </Box>
        </Box>
    );
};

export default PromptFactoryApp;