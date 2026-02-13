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
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px", // Standardized XL
      "2xl": "1536px", // Standardized 2XL
    },
    fontFamily: {
      primary: ["var(--font-lato)", "sans-serif"],
      serif: ["var(--font-playfair)", "serif"],
      display: ["var(--font-playfair)", "serif"], // Added display font alias
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37", // Metallic Gold
          50: "#FCFAF4",
          100: "#F9F4E6",
          200: "#F0E4C3",
          300: "#E6D39F",
          400: "#DCC17B",
          500: "#D4AF37", // Base Gold
          600: "#AA8C2C",
          700: "#806921",
          800: "#554616",
          900: "#2B230B",
          hover: "#C5A028",
          foreground: "#0a0a0a"
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
        dark: {
          DEFAULT: "#050505", // Deepest black
          100: "#1a1a1a",
          200: "#141414",
          300: "#0f0f0f",
          400: "#0a0a0a",
          500: "#050505",
          800: "#020202", // Extra dark for footers
        },
        light: "#FAFAFA",
        gold: {
          100: "#F9F1D8",
          200: "#F0DEAA",
          300: "#E6CB7D",
          400: "#DDB850",
          500: "#D4AF37", // Base
          600: "#AA8C2C",
          700: "#806921",
        },
        cream: {
          DEFAULT: "#F5F5DC",
          100: "#FAF9F6", // Off white/Snow
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/assets/images/pattern-dark.png')", // Placeholder for a subtle pattern
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
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "reveal": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-reveal": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "reveal": "reveal 1s ease-in-out forwards",
        "scale-reveal": "scale-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}