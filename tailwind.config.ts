import type { Config } from 'tailwindcss';

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
          dark: '#101010',
        },
        secondary: {
          light: '#F4F4F5',
          dark: '#181818',
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
          light: '#919A9E',
          dark: '#A4A4A4',
        },
      },
      border: {
        primary: {
          light: '#EEF1F4',
          dark: '#212121',
        },
      },
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
