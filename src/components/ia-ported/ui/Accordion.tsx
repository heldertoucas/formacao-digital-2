
import React from 'react';
import { Accordion as MantineAccordion, AccordionProps as MantineAccordionProps } from '@mantine/core';

// Define our custom AccordionProps
export type AccordionProps = Omit<MantineAccordionProps, 'children'> & {
  items: {
    value: string;
    control: React.ReactNode;
    panel: React.ReactNode;
  }[];
};

const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <MantineAccordion {...props}>
      {items.map(item => (
        <MantineAccordion.Item key={item.value} value={item.value}>
          <MantineAccordion.Control>{item.control}</MantineAccordion.Control>
          <MantineAccordion.Panel>{item.panel}</MantineAccordion.Panel>
        </MantineAccordion.Item>
      ))}
    </MantineAccordion>
  );
};

export default Accordion;
