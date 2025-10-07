1\. Introduction to "IA para Todos"
===================================

Welcome to the "IA para Todos" project! This document provides a high-level overview of the project's vision, pedagogical philosophy, and the technology stack that powers it.

1.1. Project Vision
-------------------

"IA para Todos" is an educational platform and a public manifesto dedicated to creating a more humane, transparent, and ethical approach to Artificial Intelligence. Our goal is to demystify AI for all citizens, providing them with the literacy to understand its impact and the tools to participate in its development. The application is designed as a Single Page Application (SPA) to deliver a seamless and interactive user experience.

1.2. Our Pedagogical Philosophy
-------------------------------

The application is more than just a collection of information; it's an active learning ecosystem built on key pedagogical principles. Understanding these principles is crucial for developing new features that align with our educational mission.

-   **Narrative Learning:** We believe learning is most effective when it's contextual. Missions and courses often start with a practical scenario or a relatable problem (like helping "D. Amélia") to create a narrative that invites exploration and engagement.

-   **Active Participation:** We avoid passive consumption of content. Learning activities are designed as interactive micro-simulations, quizzes, and hands-on challenges (like the "Fábrica de Prompts") that require the user to apply knowledge.

-   **Social Connection:** We foster a sense of community through "Pontos de Partilha" (Sharing Points), where learners can reflect on topics and see contributions from their peers, creating a collaborative environment.

1.3. Technology Stack Overview
------------------------------

Our tech stack was chosen for development speed, performance, and maintainability.

-   **Framework:** **React (with TypeScript)** for building a robust, component-based user interface.

-   **Build Tool:** **Vite** for an extremely fast development server and an optimized production build.

-   **Styling:** **Tailwind CSS** for a utility-first styling workflow that is tightly integrated with our design token system.

-   **Backend & Database:** **Supabase** serves as our Backend-as-a-Service (BaaS), providing a PostgreSQL database, authentication, and serverless functions.

-   **AI Services:** We use a resilient, multi-provider approach, primarily relying on **Google Gemini** with **OpenRouter** and **Hugging Face** as fallbacks to ensure the application is always responsive.
