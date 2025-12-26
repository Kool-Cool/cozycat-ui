import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}', // important: must include app directory
    './components/**/*.{ts,tsx}', // if you have components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    // themes: ['light', 'dark', 'synthwave'],
    themes: true, // enables all built-in daisyUI themes
  },
};

export default config;
