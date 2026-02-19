"use client";

import { useFadeUp } from "@/hooks/useScrollAnimation";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeUp({ children, className = "" }: FadeUpProps) {
  const anim = useFadeUp();
  return (
    <div ref={anim.ref} className={`${anim.className} ${className}`}>
      {children}
    </div>
  );
}
