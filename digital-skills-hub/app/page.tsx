import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Cpu, Rocket, Users } from "lucide-react";

// A placeholder for the Magic UI Shiny Button.
// In a real scenario, you would create this file and paste the code from magicui.design.
const ShinyButton = ({ children }: { children: React.ReactNode }) => (
  <Button className="relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_2s_infinite]" />
    {children}
  </Button>
);

// Program data - easy to scale by adding more objects here.
const programs = [
  {
    slug: "passaporte-competencias-digitais",
    title: "Passaporte Competências Digitais",
    description: "Capacite-se com as competências digitais essenciais para o dia-a-dia e para o mercado de trabalho.",
    icon: <Users className="h-10 w-10 text-blue-500" />,
    cta: "Explorar Passaporte",
  },
  {
    slug: "futuro-digital",
    title: "Futuro Digital",
    description: "Prepare-se para as profissões do futuro e as novas exigências do mundo digital.",
    icon: <Rocket className="h-10 w-10 text-purple-500" />,
    cta: "Descobrir o Futuro",
  },
  {
    slug: "ia-para-todos",
    title: "IA para Todos",
    description: "Desmistifique a Inteligência Artificial e aprenda como pode ser uma ferramenta para todos.",
    icon: <Cpu className="h-10 w-10 text-teal-500" />,
    cta: "Aprender IA",
  },
];

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="w-full max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
            O Seu Futuro Digital Começa Aqui
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Explore os nossos programas e encontre o caminho certo para a sua jornada de aprendizagem digital e tecnológica.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card 
              key={program.slug} 
              className="flex flex-col text-center overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 dark:bg-slate-800"
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-full mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-slate-100">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="mb-6 text-slate-600 dark:text-slate-300">
                  {program.description}
                </CardDescription>
                <ShinyButton>
                  {program.cta}
                </ShinyButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
