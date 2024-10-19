'use client'
import { Link } from "@nextui-org/react";
import { IconBrandLinkedin, IconMail, IconBrandGithub, IconBrandGitlab } from '@tabler/icons-react'

export default function Footer() {
  const iconSize = 16

  const links = [
    {
      label: 'email',
      path: 'mailto:luismaia1407@gmail.com',
      icon: <IconMail size={iconSize} />
    },
    {
      label: 'github',
      path: 'https://github.com/luismaia-git',
      icon: <IconBrandGithub size={iconSize}/>
    },
    {
      label: 'gitlab',
      path: 'https://gitlab.com/luismaia-git',
      icon: <IconBrandGitlab size={iconSize} />
    },
    {
      label: 'linkedin',
      path: 'https://www.linkedin.com/in/luis-maia-dev/',
      icon: <IconBrandLinkedin size={iconSize} />
    },
   
  ]

  return (
  <footer className="flex flex-row py-2 min-h-12 justify-center gap-6">
     {links.map(link => {
        return (
            <Link key={link.path+link.label} target="_self" color="foreground" href={link.path} className="relative group hover:text-white"
            >
              <span className="transition-all ease-in duration-400  hidden md:inline-block">{ link.label }</span>
            
              <i className="ml-1 group-hover:transition-opacity group-hover:ease-in group-hover:duration-400
            group-hover:opacity-100
            md:opacity-0">
              {link.icon}
              </i>
            </Link>            
        )
      })}
  </footer>)
}