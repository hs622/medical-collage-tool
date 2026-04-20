import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Modules",
  description: ""
}

export default function ModuleLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}