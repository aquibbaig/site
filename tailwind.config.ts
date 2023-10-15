import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "background": {
        "primary": {
          "light": "#F9FAFC",
          "dark": "#101010"
        },
      },
      "text": {
        "primary": {
          "light": "#333333",
          "dark": "#E0E0E0"
        },
      },
      "border": {
        "primary": {
          "light": "#EEF1F4",
          "dark": "#202020"
        },
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
