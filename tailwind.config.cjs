const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(var(--bg-100) / <alpha-value>)",
          200: "rgb(var(--bg-200) / <alpha-value>)",
          300: "rgb(var(--bg-300) / <alpha-value>)",
          400: "rgb(var(--bg-400) / <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--content-100) / <alpha-value>)",
          200: "rgb(var(--content-200) / <alpha-value>)",
          300: "rgb(var(--content-300) / <alpha-value>)",
          400: "rgb(var(--content-400) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          content: "rgb(var(--primary-content) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          content: "rgb(var(--secondary-content) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          content: "rgb(var(--accent-content) / <alpha-value>)",
        },
        info: {
          DEFAULT: "rgb(var(--info) / <alpha-value>)",
          content: "rgb(var(--info-content) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--success) / <alpha-value>)",
          content: "rgb(var(--success-content) / <alpha-value>)",
        },
        warn: {
          DEFAULT: "rgb(var(--warn) / <alpha-value>)",
          content: "rgb(var(--warn-content) / <alpha-value>)",
        },
        danger: {
          DEFAULT: "rgb(var(--danger) / <alpha-value>)",
          content: "rgb(var(--danger-content) / <alpha-value>)",
        },
        xero: {
          DEFAULT: "rgb(var(--xero) / <alpha-value>)",
          content: "rgb(var(--xero-content) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        logo: ["Cairo Play", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.serif],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "bg-loader": {
          from: { width: 0 },
          to: { width: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bg-loader": "bg-loader 4s both infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
}
