'use client';

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function SwitchTheme(){
  const { theme, setTheme } = useTheme();
  function Toggle(selected: boolean) {
    //selected = light
    setTheme(theme == "light" || selected === false ? "dark" : "light")
  }
  return (
    <Switch
      defaultSelected
      isSelected= {theme === "light" ? true : false}
      onValueChange={Toggle}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <IconSun className={className} />
        ) : (
          <IconMoon className={className} />
        )
      }
      />
  )
}