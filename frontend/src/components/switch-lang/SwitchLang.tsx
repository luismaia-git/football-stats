'use client';

import { LanguageContext } from "@/contexts/language-context";
import { Switch } from "@nextui-org/react";
import { IconLanguage, IconLanguageOff } from "@tabler/icons-react";
import { useContext } from "react";

export default function SwitchLang(){
 
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  return (
    <Switch
      defaultSelected
      isSelected= {userLanguage=== 'pt' ? true : false }
      onValueChange={() => userLanguageChange( userLanguage === 'pt' ? 'en': 'pt')}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <IconLanguage className={className} />
        ) : (
          <IconLanguageOff className={className} />
        )
      }
      />
  )
}