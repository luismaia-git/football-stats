'use client'
import { LanguageContext, LanguageContextProps } from "@/contexts/language-context";

import React, { useState } from "react";

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps ) {
  const [ userLanguage, setUserLanguage] = useState('en');
  const provider : LanguageContextProps = {
    userLanguage,
    userLanguageChange: (selected: string ) => {
      //const defaultLanguage = window.localStorage.getItem('rcml-lang');
      setUserLanguage(selected);
      window.localStorage.setItem('lang', selected);
    }
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};