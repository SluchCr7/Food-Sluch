/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      primary: ["var(--font-lato)", "sans-serif"],
      serif: ["var(--font-playfair)", "serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37", // Metallic Gold
          hover: "#C5A028",
          foreground: "#1a1a1a"
        },
        secondary: {
          DEFAULT: "#1A1A1A", // Off-black
          foreground: "#FAFAFA"
        },
        accent: {
          DEFAULT: "#2C3E50", // Deep Charcoal Blue
          hover: "#34495E",
          foreground: "#FFFFFF"
        },
        dark: "#050505", // Deepest black
        light: "#FAFAFA",
        // Premium palette additions
        gold: {
          100: "#F9F1D8",
          200: "#F0DEAA",
          300: "#E6CB7D",
          400: "#DDB850",
          500: "#D4AF37", // Base Gold
          600: "#AA8C2C",
          700: "#806921",
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}