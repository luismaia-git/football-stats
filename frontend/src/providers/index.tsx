"use client";

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { LanguageProvider } from './language';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}