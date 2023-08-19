/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1597E4",
      error: "#D86161",
      placeholder: "#7A7A7A",
      dark: "#212121",
      white: "#FAFAFA",
      border: "#E6E6E6",
      background: "#FFFFFF",
      disabled: "#646464",
      paper: "#D8D8D8",
    },
  },
  plugins: [],
};
