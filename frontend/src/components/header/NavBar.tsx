'use client'
import { LanguageContext } from "@/contexts/language-context";
import { navbarLinks } from "@/core/constants/labels";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useContext } from "react";
export default function NavBar(){
  const { userLanguage } = useContext(LanguageContext);
  const links = navbarLinks[userLanguage]
  const pathname = usePathname();
  return(
    <nav className="w-full flex flex-row items-center justify-center">
    <ul className="flex gap-6 text-[12px] uppercase tracking-widest">
    {links.map(link => {
      const isActive = pathname === link.path;
      return (
        <Link key={`${link.label}-${link.path}`} color={"foreground"} href={link.path} className={`${isActive ? 'text-black dark:text-white hover:foreground': 'hover:text-black dark:hover:text-white' } transition-all ease-in duration-300`}>
        { link.label }
        </Link>
      )
    })}
    </ul>
  </nav>
  )
}