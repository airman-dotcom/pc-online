/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.vue",
    "./src/App.vue"
  ],
  theme: {
    extend: {
      keyframes: {
        o: {
          from: {width: "calc(100vw/8)", height: "calc(100vw/8)"},
          to: {width: "calc(100vw/1.3)", height: "calc(100vw/2.6)"}
        }
      },
      animation: {
        o: "o 1s ease-out"
      }
    },
  },
  plugins: [],
}
