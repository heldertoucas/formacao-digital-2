
import React from 'react';
import { Blockquote, Button, Group, Text } from '@mantine/core';
import RemixIcon from './RemixIcon';

export type QuoteBlockProps = {
  quote: string;
  author: string;
  authorRole?: string;
  cta?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
};

const QuoteBlock = ({ quote, author, authorRole, cta, className }: QuoteBlockProps) => {
  const icon = <RemixIcon name="double-quotes-l" />;

  const citation = (
    <Text component="cite" size="sm">
      {author}
      {authorRole && <Text component="span" c="dimmed">, {authorRole}</Text>}
    </Text>
  );

  return (
    <div className={className}>
        <Blockquote color="blue" cite={citation} icon={icon} mt="xl" radius="lg" iconSize={40}>
            <Text size="xl" fs="italic">{quote}</Text>
        </Blockquote>
        {cta && (
            <Group justify="center" mt="lg">
                <Button onClick={cta.onClick} size="md" radius="xl">
                    {cta.label}
                </Button>
            </Group>
        )}
    </div>
  );
};

export default QuoteBlock;
