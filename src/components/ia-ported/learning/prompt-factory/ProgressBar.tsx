
import React from 'react';
import { Stepper } from '@mantine/core';

type Step = 'category' | 'recipe' | 'create' | 'result';

type ProgressBarProps = {
  currentStep: Step;
  onStepClick: (step: Step) => void;
};

const STEPS_CONFIG: { id: Exclude<Step, 'result'>; label: string; }[] = [
  { id: 'category', label: 'Categoria' },
  { id: 'recipe', label: 'Receita' },
  { id: 'create', label: 'Criar' },
];

const ProgressBar = ({ currentStep, onStepClick }: ProgressBarProps) => {
  const activeStep = STEPS_CONFIG.findIndex(s => s.id === currentStep || (currentStep === 'result' && s.id === 'create'));

  return (
    <Stepper active={activeStep} onStepClick={(stepIndex) => onStepClick(STEPS_CONFIG[stepIndex].id)}>
        {STEPS_CONFIG.map((step) => (
            <Stepper.Step key={step.label} label={step.label} />
        ))}
    </Stepper>
  );
};

export default ProgressBar;
