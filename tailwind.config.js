import flowbitePlugin from "flowbite/plugin"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        nav: "linear-gradient(90deg, #5C6D98 0%, #8FA2C9 100%)",
      },
    },
  },
  plugins: [flowbitePlugin],
}
