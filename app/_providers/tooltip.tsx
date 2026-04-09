"use client";

import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"

export default function TTProvider({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}