import React, { ComponentType } from 'react';
import HomePage from './pages/HomePage';

import type { PageDefinition, PageProps } from './App';

interface AppRouterProps {
  route: string;
  pages: PageDefinition[];
  navigateTo: (path: string) => void;
}

const AppRouter: React.FC<AppRouterProps> = ({ route, pages, navigateTo }) => {
  const pageDefinition = pages.find(p => p.path === route);
  const PageComponent = pageDefinition ? pageDefinition.component : HomePage;

  return <PageComponent navigateTo={navigateTo} pages={pages} activePath={route} />;
};

export default AppRouter;
