"use client";
import { ServerThemeProvider } from "@wits/next-themes";
import React from "react";

const ThemeProviderNext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ServerThemeProvider attribute="class">{children}</ServerThemeProvider>
  );
};

export default ThemeProviderNext;
