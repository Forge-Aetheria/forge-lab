import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#070f1e",
          card: "#0b192c",
        },
        brand: {
          emerald: "#10b981",
          emeraldHover: "#059669",
        },
        slate: {
          dark: "#0b192c",
          body: "#475569",
          muted: "#94a3b8",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};

export default config;
