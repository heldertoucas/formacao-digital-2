import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar, { NavbarProps } from './Navbar';

describe('Navbar', () => {
  const mockProps: NavbarProps = {
    variant: 'internal',
    navigationData: [],
    activePath: '#/',
    navigateTo: vi.fn(),
  };

  it('should render without crashing', () => {
    render(<Navbar {...mockProps} />);
    // Check if the site title is rendered as a basic check
    expect(screen.getByText('IA para Todos')).toBeInTheDocument();
  });
});
