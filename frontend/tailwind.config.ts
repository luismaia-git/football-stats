import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neuzeit: ['Neuzeit Grotesk', 'sans-serif'],
        biotiff: ['Biotiff', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "dark": {
        colors: {
          background: "#08070b",
          foreground: "#8f9ba8",
        },
      },
    },
  })],
};
export default config;
