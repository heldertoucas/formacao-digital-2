# Documento de Visão e Escopo: Website do Passaporte Competências Digitais

**Versão:** 1.3 (Versão Final)
**Data:** 23 de setembro de 2025

---

## Etapa 4: Princípios Orientadores e Próximos Passos (O "Enquadramento")

Esta secção final estabelece os princípios de design e comunicação que devem guiar todo o processo de desenvolvimento, bem como um plano de ação sugerido para a implementação do projeto. O objetivo é garantir que o produto final não seja apenas funcional, mas também coeso, inspirador e fiel à identidade do Passaporte Competências Digitais.

### 10.0 Princípios de Design e Experiência de Utilizador (UX)

A interface e a experiência de utilização do website devem ser o espelho da sua missão. Cada elemento, desde a cor de um botão à estrutura de uma página, deve ser intencional e reger-se pelos seguintes princípios:

* **Capacitador:** O design deve dar poder ao utilizador, fazendo-o sentir-se inteligente e capaz. A interface deve ser clara, previsível e nunca deixar o utilizador perdido ou confuso.
* **Simples e Intuitivo:** A complexidade deve ser resolvida "nos bastidores". Para o utilizador, a jornada deve ser simples e fluida. Devemos remover todos os elementos desnecessários que possam causar distração.
* **Humano e Acolhedor:** O design deve transmitir empatia e proximidade. Utilizaremos uma linguagem visual calorosa, iconografia amigável e imagens que reflitam a diversidade dos cidadãos de Lisboa. O website deve sentir-se como um serviço público de confiança.
* **Motivador:** A experiência deve celebrar o progresso e a conquista. Elementos como a barra de progresso, as mensagens de sucesso claras e um design visualmente agradável devem incentivar o formando a continuar a sua aprendizagem.
* **Fiável e Consistente:** O website tem de funcionar de forma impecável, especialmente o fluxo crítico de conclusão de curso. A consistência visual e de interação entre as diferentes páginas é crucial para construir confiança.

### 11.0 Guia de Tom e Voz

A linguagem utilizada no website é uma componente central da sua identidade. O tom de voz deve ser consistente em todos os textos, desde os títulos aos botões e mensagens de erro.

* **Tom Geral:** Capacitador, Encorajador e Respeitoso.
* **Voz (Personalidade):** Somos o seu guia de confiança na jornada digital. Não falamos "de cima para baixo", mas "ao lado" do cidadão. Somos especialistas, mas a nossa paixão é tornar o conhecimento acessível a todos.
* **Diretrizes Práticas:**
    * **Clareza acima de tudo:** Usar frases curtas e diretas. Evitar jargão técnico sempre que possível ou explicá-lo de forma simples (ex: em vez de "phishing", dizer "e-mails fraudulentos que tentam roubar os seus dados").
    * **Linguagem Positiva:** Focar nos benefícios e nas capacidades que o utilizador vai adquirir. Em vez de "Não se esqueça da sua password", preferir "Guarde a sua palavra-passe num local seguro".
    * **Utilizar a Voz Ativa:** "Você vai aprender a..." em vez de "Será ensinado a...".
    * **Ser Encorajador:** Usar palavras como "Parabéns!", "Excelente!", "Vamos a isso!" nos momentos de conquista.

### 12.0 Roadmap de Implementação Sugerido

Propõe-se uma abordagem faseada para a implementação do projeto, permitindo lançar valor mais rapidamente e recolher feedback para iterar nas fases seguintes.

* **Fase 1: Produto Mínimo Viável (MVP) - (Duração: 2-3 meses)**
    * **Objetivo:** Lançar o núcleo funcional do website.
    * **Entregáveis:**
        * Desenvolvimento da Página Principal (Landing Page) completa.
        * Desenvolvimento do template "Hub da Expedição de Aprendizagem".
        * Implementação completa do fluxo do "Desafio Digital Final" e integração com a API.
        * Lançamento de **2 a 3 cursos piloto** com todos os seus conteúdos e funcionalidades.
        * Configuração da base de dados/CMS para gerir os cursos.

* **Fase 2: Expansão de Conteúdo - (Duração: 1-2 meses)**
    * **Objetivo:** Carregar todo o conteúdo do programa no website.
    * **Entregáveis:**
        * Publicação das páginas para os restantes 7-8 cursos.
        * Lançamento do "Centro de Conhecimento" com um conjunto inicial de 5-10 artigos.
        * Refinamentos da interface com base no feedback inicial.

* **Fase 3: Novas Iniciativas e Iteração - (Contínuo)**
    * **Objetivo:** Utilizar o website como plataforma para novos programas e melhorar continuamente a experiência.
    * **Entregáveis:**
        * Criação de páginas dedicadas para os programas "Futuro Digital" e "IA para Todos".
        * Desenvolvimento de novos formatos de conteúdo interativo (simuladores, vídeos).
        * Análise de métricas de utilização para identificar pontos de melhoria.

### 13.0 Glossário de Termos

Para garantir uma comunicação consistente entre todas as partes interessadas no projeto.

| Termo | Definição |
| :--- | :--- |
| **PCD** | Acrónimo para Passaporte Competências Digitais. |
| **Hub da Expedição de Aprendizagem** | O nome conceptual dado ao modelo da página de cada curso. |
| **Desafio Digital Final** | O processo de validação final do curso, que inclui o quiz no Google Form. |
| **`CourseID`** | O identificador único e técnico para uma instância específica de um curso (ex: `curso-seguranca-T1-SET25`). |
| **`uniqueToken`** | O token de sessão criptográfico e anónimo usado para ligar a sessão do utilizador à sua submissão no formulário. |
| **Centro de Conhecimento** | A secção do website que funciona como um blog para partilhar artigos e recursos. |
| **RGPD** | Regulamento Geral sobre a Proteção de Dados. |
| **WCAG** | Web Content Accessibility Guidelines, as normas internacionais de acessibilidade web. |