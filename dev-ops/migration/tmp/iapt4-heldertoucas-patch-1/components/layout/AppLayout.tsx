import React from 'react';
import Navbar from './Navbar';
import Footer from '../Footer';

interface AppLayoutProps {
  children: React.ReactNode;
  route: string;
  navigateTo: (path: string) => void;
}

const AppLayout = ({ children, route, navigateTo }: AppLayoutProps) => {
  const navbarVariant = route === '#/' ? 'landing' : 'internal';

  // Define initial navbar text theme based on the hero section of a given route.
  // A 'dark' theme means the hero is dark and requires light text.
  // A 'light' theme means the hero is light and requires dark text.
  const pageInitialTheme: { [route: string]: 'light' | 'dark' } = {
    '#/': 'dark',
    '#/manifesto-cocreate': 'dark',
    '#/prompt-factory': 'dark',
  };
  const initialTheme = pageInitialTheme[route] || 'light';

  return (
    <div className="bg-pcd-page-bg min-h-screen">
      <Navbar variant={navbarVariant} activePath={route} navigateTo={navigateTo} initialTheme={initialTheme} />
      <main className="-mt-16">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
