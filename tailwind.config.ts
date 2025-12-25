// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",           // built-in
      "dark",            // built-in
      "cupcake",         // built-in
      {
        caramellatte: {
          "primary": "oklch(0% 0 0)",
          "primary-content": "oklch(100% 0 0)",
          "secondary": "oklch(22.45% 0.075 37.85)",
          "secondary-content": "oklch(90% 0.076 70.697)",
          "accent": "oklch(46.44% 0.111 37.85)",
          "accent-content": "oklch(90% 0.076 70.697)",
          "neutral": "oklch(55% 0.195 38.402)",
          "neutral-content": "oklch(98% 0.016 73.684)",
          "base-100": "oklch(98% 0.016 73.684)",
          "base-200": "oklch(95% 0.038 75.164)",
          "base-300": "oklch(90% 0.076 70.697)",
          "base-content": "oklch(40% 0.123 38.172)",
          "info": "oklch(42% 0.199 265.638)",
          "info-content": "oklch(90% 0.076 70.697)",
          "success": "oklch(43% 0.095 166.913)",
          "success-content": "oklch(90% 0.076 70.697)",
          "warning": "oklch(82% 0.189 84.429)",
          "warning-content": "oklch(41% 0.112 45.904)",
          "error": "oklch(70% 0.191 22.216)",
          "error-content": "oklch(39% 0.141 25.723)",
          "--radius-selector": "2rem",
          "--radius-field": "0.5rem",
          "--radius-box": "1rem",
          "--size-selector": "0.25rem",
          "--size-field": "0.25rem",
          "--border": "2px",
          "--depth": "1",
          "--noise": "1",
          "--font-ui": "var(--font-geist-sans)",
        },
      },
      
      {
        tuxedocat: {
          /* ===== Core brand ===== */
          "primary": "oklch(15% 0 0)",            // near-black
          "primary-content": "oklch(98% 0 0)",    // white
      
          "secondary": "oklch(85% 0 0)",          // soft white
          "secondary-content": "oklch(18% 0 0)",
      
          "accent": "oklch(60% 0.02 240)",        // cool steel accent
          "accent-content": "oklch(98% 0 0)",
      
          /* ===== Neutral (leader / default) ===== */
          "neutral": "oklch(22% 0 0)",
          "neutral-content": "oklch(95% 0 0)",
      
          /* ===== Base surfaces ===== */
          "base-100": "oklch(8% 0 0)",             // app background (black glass)
          "base-200": "oklch(12% 0 0)",            // elevated surface
          "base-300": "oklch(18% 0 0)",            // cards / panels
          "base-content": "oklch(96% 0 0)",
      
          /* ===== Semantic colors ===== */
          "info": "oklch(70% 0.03 240)",
          "info-content": "oklch(15% 0 0)",
      
          "success": "oklch(65% 0.04 160)",
          "success-content": "oklch(98% 0 0)",
      
          "warning": "oklch(80% 0.05 90)",
          "warning-content": "oklch(20% 0 0)",
      
          "error": "oklch(65% 0.08 25)",
          "error-content": "oklch(98% 0 0)",
      
          /* ===== Shape & feel ===== */
          "--radius-selector": "1.5rem",
          "--radius-field": "0.75rem",
          "--radius-box": "1.25rem",
      
          "--size-selector": "0.25rem",
          "--size-field": "0.25rem",
          "--border": "1px",
      
          "--depth": "2",
          "--noise": "0",
      
          "--font-ui": "var(--font-geist-sans)",
        },
      }
      
    ],
    darkTheme: "dark",
  },
};
