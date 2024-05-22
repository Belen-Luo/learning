/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{tsx,ts,js,jsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
};
