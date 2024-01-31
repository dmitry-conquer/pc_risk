module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1440px",
    },
    extend: {
      fontSize: {
       "3xl": "1.75rem",
       "4xl": "2rem",
       "5xl": "2.5rem",
      },
      colors: {
        primary: {
          100: "#F7F8FA",
          200: "#ECF1F7",
          300: "#DDE5EF",
          400: "#C8D9F2",
          500: "#0041A1",
          600: "#00255C",
        },
        title: {
          DEFAULT: "#1E2024"
        },
        text: {
          DEFAULT: "#1C1C2299"
        },
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
