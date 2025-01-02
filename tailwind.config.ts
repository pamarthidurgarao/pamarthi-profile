import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1F2C", // Dark blue background
        foreground: "#FFFFFF", // White text
        primary: {
          DEFAULT: "#0EA5E9", // Bright blue for primary elements
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1E293B", // Slightly lighter blue for secondary elements
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#334155", // Muted blue for subtle elements
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#0EA5E9", // Same as primary for consistency
          foreground: "#FFFFFF",
        },
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
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 3.5s steps(40, end), blink .75s step-end infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;