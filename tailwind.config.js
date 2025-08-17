/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,md,njk,js}", "./src/_includes/**/*.{html,md,njk,js}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#252c37",
        foreground: "#f8c61e",
        primary: {
          DEFAULT: "#f8c61e",
          foreground: "#252c37",
        },
        secondary: {
          DEFAULT: "#3a4149",
          foreground: "#f8c61e",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#3a4149",
          foreground: "#b8a068",
        },
        accent: {
          DEFAULT: "#f8c61e",
          foreground: "#252c37",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#252c37",
          foreground: "#f8c61e",
        },
      },
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
