
import React from 'react';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import Link from 'next/link';

// Define our custom variants
type CustomVariant = 'primary' | 'secondary' | 'ghost';

// Map our variants to Mantine's variants
const variantMap: Record<CustomVariant, MantineButtonProps['variant']> = {
  primary: 'filled',
  secondary: 'default',
  ghost: 'subtle',
};

// Define our custom ButtonProps
export type ButtonProps = Omit<MantineButtonProps, 'variant'> & {
  variant?: CustomVariant;
  href?: string;
  children: React.ReactNode;
};

const Button = ({ variant = 'primary', href, children, ...props }: ButtonProps) => {
  const mantineVariant = variantMap[variant];

  if (href) {
    return (
      <MantineButton
        component={Link}
        href={href}
        variant={mantineVariant}
        {...props}
      >
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton
      variant={mantineVariant}
      {...props}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
