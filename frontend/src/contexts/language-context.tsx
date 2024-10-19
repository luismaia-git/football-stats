'use client'

import { createContext } from "react";


export type LanguageContextProps = {
  userLanguage: 'br' | 'en' | string;
  userLanguageChange: (selected : string) => void
}

export const LanguageContext = createContext<LanguageContextProps>({
  userLanguage: 'en'
} as LanguageContextProps);