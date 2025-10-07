import React from 'react';
import StaticLogo from '../StaticLogo';
import RemixIcon from '../ui/RemixIcon';
import HoverDropdown from './HoverDropdown';
import type { MegaMenuCategory } from './MegaMenu';

// Copied from GlobalHeader.tsx for this alternate component
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

type AlternateHeaderProps = {
    title: string;
    activePath: string;
};

const AlternateHeader = ({ title, activePath }: AlternateHeaderProps) => {
  return (
    <header className="sticky top-0 w-full z-40 transition-all duration-300 bg-pcd-card-bg/95 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo and Page Title Pill */}
          <div className="flex items-center gap-x-4">
            <a href="#/" className="flex items-center gap-x-3 text-gray-700 hover:text-pcd-accent transition-colors">
              <StaticLogo className="h-8" />
              <span className="text-xl font-bold hidden sm:inline">IA para Todos</span>
            </a>
            
          </div>

          {/* Right section: Navigation */}
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-8">
              {navigationData.map((category, index) => {
                const isCategoryActive = category.links.some(link => link.href === activePath);
                return (
                  <div key={category.title} className="relative group pb-8">
                    <button className={`flex items-center text-base font-medium rounded-full px-3 py-1 transition-colors ${isCategoryActive ? 'bg-pcd-accent-light text-pcd-accent' : 'text-pcd-text-dark hover:text-pcd-accent'}`}>
                      <span>{category.title}</span>
                      <RemixIcon name="arrow-down-s-line" className="ml-1 h-5 w-5" />
                    </button>
                    <HoverDropdown 
                      links={category.links} 
                      align={index === navigationData.length - 1 ? 'right' : 'left'} 
                      activePath={activePath} 
                    />
                  </div>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AlternateHeader;
