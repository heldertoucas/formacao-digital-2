# Workflow: Adding Program Features

This workflow explains how to build the pages and features that are specific to one of our three main programs (e.g., "IA para Todos").

### The Role of Program Routes

While `src/components/common` contains generic and reusable components, the `src/app/` sub-folders (e.g., `src/app/ia`) contain the code that gives each program its unique identity.

A program's route folder is responsible for:
* Defining the pages and layouts for that program.
* Assembling shared components into those specific page layouts.
* Fetching data relevant to that program.
* Implementing the unique business logic for that program.

### Example Workflow: Building the Main Landing Page

The main landing page (`/`) is a perfect example of a feature that assembles shared components to create a user-facing experience.

1.  **Assemble Components in the Page File:**
    The core of the work happens directly in `src/app/page.tsx`. We import components from `src/components/*` and compose them to build the page structure.

    ```typescript
    // src/app/page.tsx
    import React from 'react';
    import { SiteHeader, SiteFooter } from '@/components/layout'; // Corrected import paths
    import { Button, Card } from '@/components/common';
    import Link from 'next/link';

    const HomePage = () => {
      return (
        <main>
          <SiteHeader />

          {/* Hero Section */}
          <section id="hero" className="text-center py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-bold">Faça Clique em si.</h1>
                <p className="py-6 text-lg">
                    Invista nas suas competências digitais, explore a oferta de formação gratuita da CMLisboa e transforme o seu futuro.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Program Card 1: Passaporte */}
                    <Card title="Comece a sua Jornada">
                        <p>Adquira as 10 competências digitais essenciais...</p>
                        <div className="mt-4">
                            <Link href="/passaporte" passHref>
                                <Button>Saber Mais e Inscrever-se</Button>
                            </Link>
                        </div>
                    </Card>

                    {/* Other cards go here... */}
                </div>
            </div>
          </section>

          {/* Other sections... */}

          <SiteFooter companyName="CMLisboa" />
        </main>
      );
    };

    export default HomePage;
    ```
    *Note: The code above is simplified and adapted for our component structure.*

2.  **Verify the Route:**
    Because we are using the Next.js App Router, the file `src/app/page.tsx` automatically creates the route for the root path (`/`). No extra routing configuration is needed.

This real-world example shows the core principle: pages are responsible for **composition**, bringing together shared, generic components from the `src/components` directory to create a specific, user-facing experience.
