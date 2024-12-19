import type { Config } from 'tailwindcss';
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/services/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: {
        primary: {
          light: '#FFF',
          dark: '#111111',
        },
        secondary: {
          light: '#F3F3F3',
          dark: '#212223',
        },
      },
      text: {
        primary: {
          light: '#111111',
          dark: '#E0E0E0',
        },
        secondary: {
          light: '#4A5263',
          dark: '#AAAAAA',
        },
        muted: {
          light: '#8b8d98',
          dark: '#6c6e79',
        },
      },
      border: {
        primary: {
          light: 'rgb(228, 228, 231)',
          dark: 'rgb(39 39 42)',
        },
      },
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-soehne)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        DEFAULT: {
          css: {
            'pre code::before': {
              'padding-left': 'unset',
            },
            'pre code::after': {
              'padding-right': 'unset',
            },
            code: {
              minWidth: '100%',
            },
            'pre code': {
              border: 0,
            },
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
export default config;
