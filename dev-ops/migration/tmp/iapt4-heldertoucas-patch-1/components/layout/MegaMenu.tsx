import React, { useState, useRef, useEffect } from 'react';
import RemixIcon from '../ui/RemixIcon';

export type MegaMenuLink = {
  href: string;
  label: string;
  description: string;
  icon?: string; // Icon is now optional
  isSectionLink?: boolean; // Flag for section links
};

export type MegaMenuCategory = {
  title: string;
  links: MegaMenuLink[];
};

const MegaMenu = ({ category }: { category: MegaMenuCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLLIElement>(null);

  const pageLinks = category.links.filter(link => !link.isSectionLink);
  const sectionLinks = category.links.filter(link => link.isSectionLink);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <li className="relative" ref={node}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-base font-medium text-gray-700 hover:text-pcd-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pcd-accent rounded-md px-2 py-1"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{category.title}</span>
        <RemixIcon name={isOpen ? 'arrow-up-s-line' : 'arrow-down-s-line'} className="ml-1 h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="relative grid gap-6 bg-pcd-card-bg px-5 py-6 sm:gap-8 sm:p-8">
              {pageLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-pcd-bg-soft transition ease-in-out duration-150"
                >
                  {link.icon && (
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-pcd-accent text-white sm:h-12 sm:w-12">
                      <RemixIcon name={link.icon} className="h-6 w-6" />
                    </div>
                  )}
                  <div className="ml-4">
                    <p className="text-base font-medium text-pcd-text-dark">{link.label}</p>
                    <p className="mt-1 text-sm text-pcd-text-light">{link.description}</p>
                  </div>
                </a>
              ))}

              {sectionLinks.length > 0 && pageLinks.length > 0 && (
                <hr className="my-2 border-pcd-border" />
              )}

              {sectionLinks.map((link) => (
                 <a
                  key={link.href}
                  href={link.href}
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-pcd-bg-soft transition ease-in-out duration-150"
                >
                  {/* No icon for section links */}
                  <div className="ml-4">
                    <p className="text-base font-medium text-pcd-text-dark">{link.label}</p>
                    <p className="mt-1 text-sm text-pcd-text-light">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MegaMenu;
