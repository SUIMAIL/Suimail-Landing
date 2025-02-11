/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav': "linear-gradient(90deg, #5C6D98 0%, #8FA2C9 100%)",
      },
    },
  },
  plugins: [],
}