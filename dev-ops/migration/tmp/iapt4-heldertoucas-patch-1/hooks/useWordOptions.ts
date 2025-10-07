'''import { useState, useEffect } from 'react';
import type { WordNode } from '../types/neural-explorer';
import { useVocabulary } from './useVocabulary';

const findNodeByPath = (tree: WordNode, path: string[]): WordNode | null => {
  let currentNode = tree;
  for (const word of path) {
    const nextNode = currentNode.children.find(child => child.word === word);
    if (!nextNode) return null;
    currentNode = nextNode;
  }
  return currentNode;
};

export const useWordOptions = (sentence: string[], isSentenceComplete: boolean, setIsSentenceComplete: (isComplete: boolean) => void, setShowCompletion: (show: boolean) => void) => {
    const { vocabularyData } = useVocabulary();
    const [wordOptions, setWordOptions] = useState<WordNode[]>([]);
    const [isFetchingNextWords, setIsFetchingNextWords] = useState(true);

    useEffect(() => {
        if (!vocabularyData || isSentenceComplete) return;

        setIsFetchingNextWords(true);
        setWordOptions([]);
        
        const currentNode = findNodeByPath(vocabularyData.sentenceTree, sentence);

        let nextWords: WordNode[] = [];
        if (currentNode && currentNode.children.length > 0) {
          nextWords = currentNode.children;
        }
        
        const isComplete = currentNode && currentNode.children.length === 0 && sentence.length > 2;
        
        const uniqueWords = Array.from(new Map(nextWords.map(item => [item.word, item])).values())
            .filter(node => !sentence.includes(node.word));

        setWordOptions(uniqueWords.sort((a,b) => b.probability - a.probability));
        setIsFetchingNextWords(false);

        if (isComplete) {
          setIsSentenceComplete(true);
          setTimeout(() => setShowCompletion(true), 2500);
        }

    }, [sentence, vocabularyData, isSentenceComplete, setIsSentenceComplete, setShowCompletion]);

    return { wordOptions, isFetchingNextWords };
};
'''