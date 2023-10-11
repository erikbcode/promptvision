'use client';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
