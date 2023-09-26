/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36375F",
        primary_light: "#F5F6FA",
        secondary: "#000",
        secondary_light: "#202020;",
        light: "rgba(32, 32, 32, 0.50)",
        white: "#fff",
        orange: "#DE7139",
      },
      fontFamily: {
        sans: ["DM Sans", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        xl: "1.125rem",
        "2xl": "1.5rem",
        // "3xl": "1.953rem",
        // "4xl": "2.441rem",
        // "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
