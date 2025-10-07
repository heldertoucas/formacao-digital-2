import React from 'react';
import RemixIcon from '../ui/RemixIcon';
import type { MegaMenuLink } from './MegaMenu';

type Navbar2DropdownProps = {
  isOpen: boolean;
  links: MegaMenuLink[];
  activePath: string;
};

const Navbar2Dropdown = ({ isOpen, links, activePath }: Navbar2DropdownProps) => {
  return (
    <div 
      className={`absolute top-full right-0 mt-2.5 w-screen max-w-xs sm:max-w-sm px-4 sm:px-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="relative grid gap-6 bg-pcd-card-bg px-5 py-6 sm:gap-8 sm:p-8">
          {links.map((link) => {
            const isActive = link.href === activePath;
            return (
              <a
                key={link.href}
                href={link.href}
                className="-m-3 p-3 flex items-start rounded-lg hover:bg-pcd-bg-soft transition ease-in-out duration-150"
              >
                {link.icon && (
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pcd-accent text-white sm:h-12 sm:w-12">
                    <RemixIcon name={link.icon} className="h-7 w-7 pl-0.5" />
                  </div>
                )}
                <div className="ml-4">
                  <p className="text-base font-medium text-pcd-text-dark">
                    {isActive ? (
                      <span className="bg-pcd-accent-light text-pcd-accent font-bold px-2 py-1 rounded-full">{link.label}</span>
                    ) : (
                      link.label
                    )}
                  </p>
                  <p className="mt-1 text-sm text-pcd-text-light">{link.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar2Dropdown;
