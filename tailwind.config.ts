import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },

      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.neutral.700'),
      }),

      transitionTimingFunction: {
        DEFAULT: 'linear',
      },
    },
  },

  plugins: [typography],
};

export default twConfig;
