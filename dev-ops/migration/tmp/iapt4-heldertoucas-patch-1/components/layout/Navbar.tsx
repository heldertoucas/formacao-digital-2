import React, { useState, useEffect, useRef } from 'react';
import RemixIcon from '../ui/RemixIcon';
import NavbarDropdown from './NavbarDropdown';
import MobileMenuPanel from './MobileMenuPanel';
import StaticLogo from '../StaticLogo';

const navigationData: MegaMenuCategory[] = [
  {
    title: 'Participar',
    links: [
      {
        href: '#/manifesto-cocreate',
        label: 'Co-criar o Manifesto',
        description: 'Junte-se à construção de um futuro mais humano para a IA.',
        icon: 'group-2-line'
      },
      {
        href: '/#participate',
        label: 'Ver secção "Participar"',
        description: 'Descubra todas as formas de se envolver com a comunidade.',
        isSectionLink: true
      }
    ]
  },
  {
    title: 'Aprender',
    links: [
      {
        href: '#/copilot-course',
        label: 'Curso ✨Descobrir a IA',
        description: 'Uma introdução aos conceitos fundamentais da IA generativa.',
        icon: 'sparkling-2-line'
      },
      {
        href: '#/mscopilot-course-v3',
        label: 'Curso MS Copilot V3',
        description: 'Torne-se um mestre do Copilot com as nossas técnicas mais recentes.',
        icon: 'microsoft-fill'
      },
      {
        href: '/#learn',
        label: 'Ver todos os cursos',
        description: 'Navegue por todos os nossos recursos de aprendizagem.',
        isSectionLink: true
      }
    ]
  },
  {
    title: 'Experimentar',
    links: [
      {
        href: '#/prompt-factory',
        label: 'Fábrica de Prompts',
        description: 'Aprenda a construir prompts eficazes com o nosso gerador interativo.',
        icon: 'robot-2-line'
      }
    ]
  },
  {
    title: 'O Programa',
    links: [
      {
        href: '#/component-library',
        label: 'Biblioteca de Componentes',
        description: 'Explore os blocos de construção visuais do nosso projeto.',
        icon: 'reactjs-line'
      },
      {
        href: '/#about',
        label: 'Sobre o IA para Todos',
        description: 'Conheça a nossa missão, visão e os nossos valores.',
        isSectionLink: true
      }
    ]
  }
];

// Define the structure for a single navigation link
export interface MegaMenuLink {
  href: string;
  label: string;
  description: string;
  icon?: string;
  isSectionLink?: boolean;
}

// Define the structure for a category of navigation links
export interface MegaMenuCategory {
  title: string;
  links: MegaMenuLink[];
}

// Define the props for the Navbar component
export interface NavbarProps {
  variant: 'landing' | 'internal';
  activePath: string;
  navigateTo: (path: string) => void;
  navigationData?: MegaMenuCategory[]; // Make optional
  initialTheme?: 'light' | 'dark';
}

const Navbar = ({ variant, activePath, navigateTo, initialTheme = 'light' }: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const isNavbarTransparent = !isScrolled;
  const textColorClass = isNavbarTransparent
    ? (initialTheme === 'dark' ? 'text-white' : 'text-pcd-text-dark')
    : 'text-pcd-text-dark';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Run on mount to check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={navbarRef} className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Site Title */}
            <div className="flex items-center gap-x-4">
              <a href="#/" className={`flex items-center gap-x-3 ${textColorClass} transition-colors`}>
                <StaticLogo className="h-8" />
                <span className="text-2xl font-bold">IA para Todos</span>
              </a>
            </div>

            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {variant === 'internal' && navigationData.map((category) => {
                  const isCategoryActive = category.links.some(link => link.href === activePath);

                  return (
                    <div key={category.title} className="relative">
                      <button 
                        onClick={() => setOpenMenu(openMenu === category.title ? null : category.title)}
                        className={`flex items-center text-base font-medium rounded-full px-3 py-1 transition-colors ${isCategoryActive ? 'text-pcd-accent' : textColorClass} hover:text-pcd-accent`}
                      >
                        <span>{category.title}</span>
                        <RemixIcon name="arrow-down-s-line" className="ml-1 h-5 w-5" />
                      </button>
                      <NavbarDropdown 
                        isOpen={openMenu === category.title}
                        links={category.links}
                        activePath={activePath}
                      />
                    </div>
                  );
                })}
                {/* Placeholder for landing page links */}
                {variant === 'landing' && navigationData.map((category) => (
                  <a 
                    key={category.title} 
                    href={category.links[0].href}
                    className={`text-base font-medium ${textColorClass} hover:text-pcd-accent transition-colors`}
                  >
                    {category.title}
                  </a>
                ))}
              </nav>

              {/* Mobile Burger Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${textColorClass}`}>
                  <RemixIcon name="menu-line" className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenuPanel 
        isOpen={isMobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navigationData={navigationData} 
      />
    </>
  );
};

export default Navbar;
