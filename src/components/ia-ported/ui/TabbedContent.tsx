
import React from 'react';
import { Tabs as MantineTabs, TabsProps as MantineTabsProps } from '@mantine/core';

// Define our custom TabbedContentProps
export type TabbedContentProps = Omit<MantineTabsProps, 'children'> & {
  items: {
    value: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }[];
};

const TabbedContent = ({ items, ...props }: TabbedContentProps) => {
  return (
    <MantineTabs defaultValue={items[0]?.value} {...props}>
      <MantineTabs.List>
        {items.map(item => (
          <MantineTabs.Tab key={item.value} value={item.value}>
            {item.label}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {items.map(item => (
        <MantineTabs.Panel key={item.value} value={item.value}>
          {item.content}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
};

export default TabbedContent;
