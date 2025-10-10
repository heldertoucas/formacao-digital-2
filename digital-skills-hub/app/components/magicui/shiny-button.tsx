import * as React from "react";
import { Button } from "@/app/components/ui/button";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <Button
      className={
        "relative overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 " +
        (className ?? "")
      }
      {...props}
    >
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_2s_infinite]" />
      {children}
    </Button>
  );
}
