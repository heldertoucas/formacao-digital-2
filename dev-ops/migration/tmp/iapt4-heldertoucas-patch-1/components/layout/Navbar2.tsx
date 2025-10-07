import React, { useState, useRef, useEffect } from 'react';
import StaticLogo from '../StaticLogo';
import RemixIcon from '../ui/RemixIcon';
import type { MegaMenuCategory } from './MegaMenu';
import Navbar2Dropdown from './Navbar2Dropdown';
import MobileMenuPanel from './MobileMenuPanel';

// Copied from AlternateHeader.tsx
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

type Navbar2Props = {
    title: string;
    activePath: string;
};

const Navbar2 = ({ title, activePath }: Navbar2Props) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMenu]);

  return (
    <>
      <header ref={navbarRef} className="sticky top-0 w-full z-40 transition-all duration-300 bg-pcd-card-bg/95 backdrop-blur-lg shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-x-4">
              {/* Mobile Burger Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(true)} className="p-2">
                  <RemixIcon name="menu-line" className="h-8 w-8" />
                </button>
              </div>
              <a href="#/" className="flex items-center gap-x-3 text-gray-700 hover:text-pcd-accent transition-colors">
                <StaticLogo className="h-8" />
                <span className="text-2xl font-bold">IA para Todos</span>
              </a>
            </div>
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationData.map((category, index) => {
                  const isCategoryActive = category.links.some(link => link.href === activePath);
                  return (
                    <div key={category.title} className="relative">
                      <button 
                        onClick={() => {
                          if (openMenu === category.title) {
                            setOpenMenu(null);
                          } else {
                            setOpenMenu(category.title);
                          }
                        }}
                        className={`flex items-center text-base font-medium rounded-full px-3 py-1 transition-colors ${isCategoryActive ? 'bg-pcd-accent-light text-pcd-accent' : 'text-pcd-text-dark hover:text-pcd-accent'}`}
                      >
                        <span>{category.title}</span>
                        <RemixIcon name="arrow-down-s-line" className="ml-1 h-5 w-5" />
                      </button>
                      <Navbar2Dropdown 
                        isOpen={openMenu === category.title}
                        links={category.links}
                        activePath={activePath}
                      />
                    </div>
                  );
                })}
              </nav>

            </div>
          </div>
        </div>
      </header>
      <MobileMenuPanel isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navigationData={navigationData} />
    </>
  );
};

export default Navbar2;