# PRD: Phase 2 - Main Portal & Landing Page (Final)

---

## 1. Introduction/Overview

This document outlines the requirements for Phase 2 of the Digital Literacy Portugal project. The primary goal of this phase is to build the "front door" to our digital ecosystem: the main portal application shell and its landing page. This page will serve as a central, welcoming hub that both inspires users about the importance of digital skills and provides clear, simple navigation to the three core programs: "Passaporte Competências Digitais," "Futuro Digital," and "IA para Todos."

## 2. Goals

- **Inspire & Inform:** Create a visually engaging landing page that motivates users to begin their digital literacy journey.
- **Establish Navigation:** Implement the top-level routing structure and ensure users can easily find and navigate to each program.
- **Showcase the Brand:** Utilize the foundational UI components to create a professional and consistent brand experience.
- **Ensure Quality:** Deliver a fully responsive, accessible, and performant landing page.

## 3. User Stories

- **As a curious learner,** I want to be inspired by the possibilities of digital skills so that I feel motivated to start a program.
- **As a visitor who knows which program I want,** I want to quickly find and navigate to my desired program page without confusion.

## 4. Functional Requirements

### 4.1. Routing

1.  The system **must** configure routes for `/`, `/passaporte`, `/futuro`, and `/ia`.
2.  The system **must** display a user-friendly "404 Not Found" page for any undefined route.

### 4.2. Landing Page (`/`)

1.  The page **must** be built within the `apps/portal` application.
2.  The page **must** display the `SiteHeader` component. The header links for "About" and "Contact" **must** scroll smoothly to the corresponding sections on the page.
3.  The page **must** display a **Hero Section** containing three columns/cards for the programs.
4.  The page **must** display an **About Section** (`<section id="about">`).
5.  The page **must** display a **Testimonials Section**.
6.  The page **must** display a **Contact Section** (`<section id="contact">`).
7.  The page **must** display the `SiteFooter` component.
8.  The entire page layout **must** be fully responsive.

### 4.3. Page Content

#### **Hero Section Content**

-   **Headline:** `Faça Clique em si.`
-   **Sub-headline:** `Invista nas suas competências digitais, explore a oferta de formação gratuita da CMLisboa e transforme o seu futuro.`

-   **Program Column 1: Passaporte Competências Digitais**
    -   **Title:** `Comece a sua Jornada`
    -   **Text:** `Adquira as 10 competências digitais essenciais para navegar no dia a dia com confiança. Desde usar o telemóvel e comunicar online, até tratar de serviços públicos e criar conteúdos. Um programa de base, prático e para todos.`
    -   **Ideal for:** `Cidadãos que procuram a sua primeira experiência no mundo digital ou que desejam consolidar conhecimentos fundamentais.`
    -   **Button CTA:** `[ Saber Mais e Inscrever-se ]` (links to `/passaporte`)

-   **Program Column 2: Futuro Digital**
    -   **Title:** `Acelere as Suas Competências`
    -   **Text:** `Aprofunde os seus conhecimentos e prepare-se para os desafios do mercado de trabalho. Com base nas 10 competências do Passaporte, este programa eleva a sua proficiência para um nível intermédio e avançado em ferramentas colaborativas, análise de dados e muito mais.`
    -   **Ideal for:** `Quem já concluiu o Passaporte ou possui competências básicas e procura evoluir profissionalmente.`
    -   **Button CTA:** `[ Ver Detalhes do Programa ]` (links to `/futuro`)

-   **Program Column 3: IA para Todos**
    -   **Title:** `Explore a Revolução da Inteligência Artificial`
    -   **Text:** `Desmistifique a Inteligência Artificial e aprenda a utilizá-la de forma ética e criativa no seu trabalho e vida pessoal. Um programa inovador que lhe dá as ferramentas para aumentar a produtividade e compreender o futuro da tecnologia.`
    -   **Ideal for:** `Profissionais, estudantes e todos os cidadãos curiosos que desejam liderar na era da IA.`
    -   **Button CTA:** `[ Explorar o Futuro da IA ]` (links to `/ia`)

#### **About Section Content**

-   **Title:** `A Nossa Missão: Capacitar Lisboa para um Futuro Digital e Inclusivo`
-   **Text:** `Em Lisboa, como em todo o país, o fosso digital é um desafio real que afeta a participação cívica e a igualdade de oportunidades. Foi para responder a esta realidade que a Câmara Municipal de Lisboa criou, em 2017, o Programa para a Inclusão e Literacia Digital (PILD). A nossa missão é clara: desmistificar a tecnologia e transformá-la numa ferramenta de empoderamento para todos. Acreditamos que a literacia digital é um direito fundamental na sociedade atual. Por isso, desenhámos percursos de aprendizagem como o Passaporte Competências Digitais, o Futuro Digital e o IA para Todos para serem acessíveis, práticos e, acima de tudo, centrados nas pessoas. Utilizamos metodologias inovadoras, como a gamificação e a certificação através de Open Badges, para criar uma experiência de aprendizagem motivadora e reconhecida. Mais do que ensinar a usar ferramentas, queremos inspirar a confiança, promover o pensamento crítico e construir uma comunidade onde ninguém fica para trás. Junte-se a nós nesta missão. Juntos, estamos a construir uma Lisboa mais conectada, mais justa e mais preparada para o amanhã.`

#### **Testimonials Section Content**

-   **Title:** `O Que a Nossa Comunidade Diz`
-   **Testimonial 1:** `"Eu pensava que a tecnologia não era para mim, mas este programa mudou tudo. Hoje, marco consultas online, comunico com a minha família por vídeo e até já sei identificar notícias falsas. Deu-me uma nova esperança e independência." - Alberto Marques, 48 anos, Participante`
-   **Testimonial 2:** `"Depois de concluir o Passaporte, sentia que precisava de mais para me destacar profissionalmente. O Futuro Digital deu-me competências avançadas em ferramentas de colaboração e análise de dados que comecei a aplicar imediatamente no meu trabalho. Foi um verdadeiro acelerador de carreira!" - Sofia Andrade, 35 anos, Gestora de Projetos`
-   **Testimonial 3:** `"Sempre ouvi falar de Inteligência Artificial com um misto de curiosidade e receio. O programa 'IA para Todos' foi uma revelação. Aprendi a usar ferramentas que poupam horas de trabalho na gestão da minha loja e a compreender as implicações éticas desta tecnologia. Sinto-me preparado para o futuro." - Rui Costa, 52 anos, Comerciante`

#### **Contact Section Content**

-   **Title:** `Fale Connosco`
-   **Intro Text:** `Tem alguma dúvida sobre os nossos programas? Uma sugestão para melhorarmos? Ou representa uma organização e gostaria de explorar uma parceria? Saiba como nos contactar.`
-   **Email:** `formacaodigital@cm-lisboa.pt`
-   **Phone:** `+351 21 817 40 50`
-   **Address:** `Departamento de Desenvolvimento e Formação, Rua António Patrício, 26, 3º Andar, 1700-049 Lisboa`
-   **Social Links:** Facebook, LinkedIn, Instagram.

## 5. Non-Goals (Out of Scope)

- This phase does **not** include the creation of content for the final program pages (`/passaporte`, etc.).
- The landing page will **not** contain any dynamic, server-rendered content.
- User authentication is **not** in scope.

## 6. Design Considerations

- The page will be constructed using reusable components from the `src/components/` directory.
- The layout should be clean, modern, and professional.

## 7. Technical Considerations

- Development will take place within our Next.js application, primarily in `src/app/page.tsx`.
- Routing will be implemented using the Next.js App Router.
- Smooth scrolling for anchor links should be implemented.

## 8. Success Metrics & Acceptance Criteria

1.  Navigating to `/` loads the new landing page.
2.  The page is fully responsive on mobile and desktop.
3.  All program cards link correctly to their respective paths.
4.  The "About" and "Contact" header links scroll to the correct sections.
5.  A 404 page is shown for undefined routes.
6.  The page achieves a Lighthouse score of 90+ for Performance, Accessibility, and Best Practices.nd Best Practices.