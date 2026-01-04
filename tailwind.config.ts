module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stretch: {
          "0%": { transform: "scaleY(0.4)", opacity: "0" },
          "60%": { transform: "scaleY(1.05)", opacity: "1" },
          "100%": { transform: "scaleY(1)" },
        },
        wobble: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        stretch: "stretch 0.6s cubic-bezier(.34,1.56,.64,1)",
        wobble: "wobble 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
}
