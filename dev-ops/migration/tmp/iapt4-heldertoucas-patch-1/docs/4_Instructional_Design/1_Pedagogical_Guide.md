Guia Técnico e Pedagógico para o Design de Missões
==================================================

1\. Introdução
--------------

Este documento serve como o "manual de estilo" e o guia oficial para o design e implementação de todas as missões de aprendizagem na aplicação "IA para Todos". As diretrizes aqui definidas são o resultado de um processo de design iterativo e consolidam a nossa visão para uma experiência de aprendizagem de alta qualidade.

O objetivo é garantir consistência, engajamento e eficácia pedagógica em todo o ecossistema de aprendizagem.

2\. A Perspetiva Pedagógica: Um Ecossistema de Aprendizagem Ativa
-----------------------------------------------------------------

A nossa abordagem pedagógica foca-se em criar um ambiente onde o formando é um agente ativo, não um consumidor passivo de conteúdo.

### Princípios Pedagógicos Fundamentais:

-   **Aprendizagem Narrativa:** As missões devem, sempre que possível, começar com um cenário ou um problema prático que crie um contexto relevante.

    -   **Exemplo Prático:** O componente `InteractiveNarrative.tsx` é usado no início dos cursos para apresentar um cenário (como ajudar a "D. Amélia") onde o utilizador faz uma escolha inicial, contextualizando imediatamente a aprendizagem.

-   **Participação Ativa:** As atividades devem ser desenhadas como micro-simulações interativas que garantem uma aprendizagem experiencial.

    -   **Exemplo Prático:** O `SentenceBuilder.tsx` é uma simulação direta de como a IA gera texto, permitindo que os utilizadores "pensem" como o modelo ao escolher a próxima palavra mais provável.

-   **Conexão Social:** Devem ser incluídos "Pontos de Partilha" que incentivem os formandos a expressar as suas reflexões e a ver as contribuições dos colegas.

    -   **Exemplo Prático:** O componente `SocialReflection.tsx` pede aos utilizadores para partilharem as suas opiniões sobre um tema e depois exibe as respostas dos outros, fomentando um sentido de comunidade.

-   **Avaliação de Competências:** As verificações de conhecimento devem focar-se em cenários práticos que avaliem a capacidade de aplicar o conhecimento, em vez de memorização.

    -   **Exemplo Prático:** O `InlineQuiz.tsx` é utilizado para apresentar questões baseadas em cenários realistas (e.g., "Qual destes e-mails é mais apropriado?"), testando o juízo crítico em vez da simples recordação de factos.

3\. A Perspetiva Técnica: Um Sistema de Design Modular
------------------------------------------------------

A nossa arquitetura técnica foi desenhada para ser flexível e de fácil manutenção, com base num sistema de componentes reutilizáveis.

### Stack Tecnológica e de Design:

-   **Framework:** React com TypeScript.

-   **Styling:** Tailwind CSS, utilizando um sistema de design tokens definido em `index.css`.

-   **Interatividade:** Componentes React que encapsulam a lógica de interatividade.

### Sistema de Blocos de Conteúdo (`MissionBlock.tsx`)

Para garantir uma linguagem visual e pedagógica coerente, todas as missões são construídas usando o componente `MissionBlock.tsx`, que adapta o seu estilo com base numa categoria.

#### 1\. Bloco `aprender`

-   **Propósito:** Explicar conceitos teóricos e fundamentais.

-   **Cor de Destaque:** Azul (`--pcd-blue`).

-   **Componentes Associados:** `KeyConceptsBlock.tsx`, `Accordion.tsx`, `VideoBlock.tsx`.

#### 2\. Bloco `descobrir`

-   **Propósito:** Apresentar recursos externos ou novas ferramentas para exploração.

-   **Cor de Destaque:** Roxo (`--pcd-roxo`).

-   **Componentes Associados:** `VideoBlock.tsx`, `PromptCard.tsx`, `PromptExamplesBlock.tsx`.

#### 3\. Bloco `desafio`

-   **Propósito:** Propor atividades práticas e interativas onde o formando aplica o conhecimento.

-   **Cor de Destaque:** Verde (`--pcd-green`).

-   **Componentes Associados:** `InlineQuiz.tsx`, `SentenceBuilder.tsx`, `PromptFactoryBlock.tsx`.

#### 4\. Bloco `partilhar`

-   **Propósito:** Criar momentos de interação social e construção de comunidade.

-   **Cor de Destaque:** Cinza (`--pcd-text-light`).

-   **Componentes Associados:** `SocialReflection.tsx`.
