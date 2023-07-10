/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      "3xl": "30px",
    },
    extend: {
      height: {
        "calc-vh": "calc(100vh - 80px)",
      },

      lineHeight: {
        12: "4rem",
      },

      backgroundImage: {
        img1: "url('/images/my-photo.jpeg')",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyDarkColor: "#111",
        mainColor: "#ffb400",
        iconBgColor: "#2b2a2a",
        shadow: "0 0 7px rgba(0,0,0,.9)",
        greyBg: "#323232",
        transparentGray: "hsl(0, 0%, 100%, 0.07)",
        borderColor: "#252525",
        tWhite: "#fff",
        lGray: "#eee",
      },
    },
  },
  plugins: [],
};
