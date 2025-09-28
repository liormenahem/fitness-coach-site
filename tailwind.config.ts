import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff2e0",
          100: "#ffe4c2",
          200: "#ffd4a1",
          300: "#ffc480",
          400: "#ffb661",
          500: "#ffa94d",
          600: "#ff912f",
          700: "#ff7f1a",
          800: "#ff6f0b",
          900: "#e05f00",
          DEFAULT: "#ffa94d",
          dark: "#ff6b00",
        },
        surface: "var(--surface)",
        body: "var(--body-text)",
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "Heebo", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        "tight-rtl": "-0.018em",
        "wide-rtl": "0.06em",
      },
      lineHeight: {
        "snug-rtl": "1.45",
        "relaxed-rtl": "1.9",
      },
    },
  },
  plugins: [],
};

export default config;
