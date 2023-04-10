import scrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig: Config = {
  darkMode: 'class',

  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.slate.700'),
      }),
    },
  },

  plugins: [scrollbar],
};

export default twConfig;
