import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: {
        primary: {
          light: "#FFF",
          dark: "#101010",
        },
        secondary: {
          light: "#FAFAF9",
          dark: "#181818",
        },
      },
      text: {
        primary: {
          light: "#333333",
          dark: "#E0E0E0",
        },
        secondary: {
          light: "#555555",
          dark: "#AAAAAA",
        },
        muted: {
          light: "#90959D",
          dark: "#8C8C8C",
        },
      },
      border: {
        primary: {
          light: "#EEF1F4",
          dark: "#202020",
        },
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
