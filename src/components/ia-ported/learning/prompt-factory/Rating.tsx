'use client';

import React, { useState } from 'react';
import { Rating as MantineRating, Text, Box } from '@mantine/core';

type RatingProps = {
  count?: number;
  onRate: (rating: number) => void;
};

const Rating = ({ count = 5, onRate }: RatingProps) => {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRate = (value: number) => {
    if (isRated) return;
    setRating(value);
    onRate(value);
    setIsRated(true);
  }

  return (
    <Box style={{ textAlign: 'center' }}>
        {!isRated && (
            <Text size="sm" c="dimmed" mb="xs">Clique numa estrela para votar</Text>
        )}
        <MantineRating 
            size="xl" 
            count={count} 
            value={rating} 
            onChange={handleRate} 
            readOnly={isRated} 
        />
        {isRated && (
            <Text c="green" fw={500} mt="sm" size="lg">
                Obrigado pela sua avaliação!
            </Text>
        )}
    </Box>
  );
};

export default Rating;