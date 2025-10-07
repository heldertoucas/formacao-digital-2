'''import { useState, useCallback } from 'react';
import type { WordNode } from '../types/neural-explorer';

const INITIAL_SENTENCE = ['o', 'segredo'];

export const useSentence = () => {
    const [sentence, setSentence] = useState<string[]>(INITIAL_SENTENCE);
    const [isSentenceComplete, setIsSentenceComplete] = useState(false);

    const handleWordSelect = useCallback((wordNode: WordNode) => {
        if (isSentenceComplete) return;
        setSentence(prev => [...prev, wordNode.word]);
    }, [isSentenceComplete]);

    const handleReset = useCallback(() => {
        // This logic will be simplified for now and will be expanded later
        setSentence(INITIAL_SENTENCE);
        setIsSentenceComplete(false);
    }, []);

    return {
        sentence,
        setSentence, // Exposing for useWordOptions
        isSentenceComplete,
        setIsSentenceComplete, // Exposing for useWordOptions
        handleWordSelect,
        handleReset,
    };
};
'''