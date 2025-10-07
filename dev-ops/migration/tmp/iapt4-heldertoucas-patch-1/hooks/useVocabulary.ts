'''import { useState, useEffect } from 'react';
import { sentenceTrees } from '../temporary/data/sentence-builder-data';
import type { WordNode } from '../types/neural-explorer';
import type { ConstellationNode, Link, ProcessedVocabulary } from '../types/neural-explorer';

// A function to process the raw tree data into a format for the constellation
const processVocabularyData = (trees: typeof sentenceTrees): ProcessedVocabulary => {
    const nodes: ConstellationNode[] = [];
    const nodeMap = new Map<string, ConstellationNode>();
    const allLinks: Link[] = [];
    let y_offset = 0;

    function traverse(node: WordNode, depth = 0, parent: ConstellationNode | null = null) {
        let existingNode = nodeMap.get(node.word);
        if (!existingNode) {
            existingNode = {
                id: node.word,
                x: depth * 20,
                y: y_offset,
                z: Math.random() * 20 - 10,
                probability: node.probability,
            };
            nodes.push(existingNode);
            nodeMap.set(node.word, existingNode);
            y_offset += 15;
        }

        if (parent) {
            allLinks.push({ source: parent.id, target: existingNode.id });
        }

        if (node.next) {
            node.next.forEach(child => traverse(child, depth + 1, existingNode));
        }
    }

    trees.forEach(tree => traverse(tree.start));

    return { nodes, nodeMap, allLinks, sentenceTree: trees[0].start }; // Returning the first tree for now
};


export const useVocabulary = () => {
    const [vocabularyData, setVocabularyData] = useState<ProcessedVocabulary | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // In a real app, this would be an async fetch
            const processedData = processVocabularyData(sentenceTrees);
            setVocabularyData(processedData);
        } catch (e) {
            setError('Failed to process vocabulary data.');
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { vocabularyData, isLoading, error };
};
'''