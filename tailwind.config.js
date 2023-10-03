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
        light: "#D9D9D9",
        light_secondary: "rgba(32, 32, 32, 0.50)",
        white: "#fff",
        orange: "#DE7139",
        orange_secondary:'rgba(223, 122, 69, 0.10)',
        red_primary:'#FF8686',
      },
      fontSize: {
        mini_sm: "12px",
        sm: "14px",
        md: "1rem",
        xl: "1.125rem",
        "1xl": "1.25rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: ["var(--font-DM-Sans)"],
        lato: ["var(--font-Lato)"],
      },
      // lineHeight: {
      //   'extra-loose': '2.5',
      //   '12': '3rem',
      // }
      boxShadow: {
        'sm': '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
        'md':' 0px 4px 15px 0px rgba(0, 0, 0, 0.24)',

      }
    },
  },
  plugins: [

  ],
};
