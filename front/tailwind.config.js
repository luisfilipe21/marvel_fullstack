/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marvel: ["Marvel", "system-ui"]
      },
      colors: {
        Red: ["#ED1D24"],
        Blue: ["#005A9C"],
        Yellow: ["#FFCC00"]
      }
    },
  },
  plugins: [],
}

