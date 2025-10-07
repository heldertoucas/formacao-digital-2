import React from 'react';
import type { MegaMenuLink } from './Navbar';

interface NavbarDropdownProps {
  isOpen: boolean;
  links: MegaMenuLink[];
  activePath: string;
}

const NavbarDropdown = ({ isOpen, links, activePath }: NavbarDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg p-4 z-50">
      <ul className="space-y-2">
        {links.map((link) => {
          const isActive = link.href === activePath;
          return (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`block p-3 rounded-md transition-colors ${isActive ? 'bg-pcd-accent-light text-pcd-accent' : 'hover:bg-gray-100'}`}>
                <span className="font-semibold block">{link.label}</span>
                <span className="text-sm text-gray-500">{link.description}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarDropdown;
