import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const twConfig: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },

  plugins: [],
};

export default twConfig;
