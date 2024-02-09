module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1272px",
      "2xl": "1440px",
    },
    extend: {
      fontSize: {
       "3xl": "1.75rem",
       "4xl": "2rem",
       "5xl": "2.5rem",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  future: {
    // hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
