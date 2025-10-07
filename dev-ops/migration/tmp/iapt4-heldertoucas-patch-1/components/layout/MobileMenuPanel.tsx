import React from 'react';
import { MegaMenuCategory } from './Navbar';
import RemixIcon from '../ui/RemixIcon';

interface MobileMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: MegaMenuCategory[];
}

const MobileMenuPanel = ({ isOpen, onClose, navigationData }: MobileMenuPanelProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-white z-50 p-4 md:hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="p-2">
          <RemixIcon name="close-line" className="h-8 w-8" />
        </button>
      </div>
      <nav>
        <ul className="space-y-4">
          {navigationData.map((category) => (
            <li key={category.title}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{category.title}</h3>
              <ul className="space-y-1">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={onClose} className="block p-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;