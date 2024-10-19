export type Label = Record<string, Record<string, TranslationItem>>;
export type Links = Record<string, LinkItem []>

export interface LinkItem {
  label: string,
  path: string,
}

export interface TranslationItem {
  value: string;
}

export const labels: Label = {
  'pt':
    {
    'about': {
      value: "Criar. Compartilhar. Aprender.",
      },
    'projects': {
      value: "Trabalho. Hobby. Código aberto.",
      },
    'career': {
        value: "Carreira",
      },
    },
  'en':
    {
      'about': {
        value: "Create. Share. Learn.",
      },
      'projects':{
        value: "Work. Hobby. Open Source.",
      },
      'career': {
        value: "Career",
      },
    },
}


export const navbarLinks : Links = {
  'pt':
    [
      {
        label: 'Sobre',
        path: '/about',
      },
    ],
    'en':
    [
      {
        label: 'About',
        path: '/about',
      },
    ]

}