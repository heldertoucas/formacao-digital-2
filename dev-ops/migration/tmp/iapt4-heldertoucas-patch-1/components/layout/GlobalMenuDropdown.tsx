import React from 'react';
import RemixIcon from '../ui/RemixIcon';
import type { MegaMenuCategory } from './MegaMenu';

type GlobalMenuDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  navigationData: MegaMenuCategory[];
};

const GlobalMenuDropdown = ({ isOpen, onClose, navigationData }: GlobalMenuDropdownProps) => {
  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="relative bg-pcd-card-bg shadow-lg rounded-lg p-8 mx-auto mt-20 max-w-6xl w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-pcd-text-light hover:text-pcd-text-dark transition-colors">
          <RemixIcon name="close-line" className="h-6 w-6" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {navigationData.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-pcd-text-light tracking-wider uppercase mb-4">{category.title}</h3>
              <ul className="space-y-4">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={onClose} className="-m-3 p-3 flex items-center rounded-lg hover:bg-pcd-bg-soft transition ease-in-out duration-150">
                      {link.icon && (
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pcd-accent text-white sm:h-12 sm:w-12">
                          <RemixIcon name={link.icon} className="h-7 w-7" />
                        </div>
                      )}
                      <div className="ml-4">
                        <p className="text-base font-medium text-pcd-text-dark">{link.label}</p>
                        <p className="mt-1 text-sm text-pcd-text-light">{link.description}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalMenuDropdown;
