// Global TypeScript types for Digital Skills Hub

export type ProgramSlug = "passaporte-competencias-digitais" | "futuro-digital" | "ia-para-todos";

export interface ProgramMeta {
  slug: ProgramSlug;
  title: string;
  description: string;
  cta: string;
}
