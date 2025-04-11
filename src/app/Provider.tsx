"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

interface ProviderPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export const Provider: React.FC<ProviderPropsInterface> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{children}</>;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
