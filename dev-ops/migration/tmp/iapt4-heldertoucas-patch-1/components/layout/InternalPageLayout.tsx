/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import Navbar from './Navbar';

interface InternalPageLayoutProps {
  children: React.ReactNode;
  activePath?: string;
  navigateTo: (path: string) => void;
}

const InternalPageLayout: React.FC<InternalPageLayoutProps> = ({ children, activePath, navigateTo }) => {
  return (
    <div className="bg-pcd-page-bg min-h-screen">
      <Navbar variant="internal" activePath={activePath!} navigateTo={navigateTo} />
      <main>
        {children}
      </main>
    </div>
  );
};

export default InternalPageLayout;
