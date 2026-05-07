/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          muted: "#404040",
          subtle: "#525252",
        },
        canvas: {
          DEFAULT: "#fafafa",
          raised: "#ffffff",
          line: "#d4d4d8",
        },
        night: {
          DEFAULT: "#0a0a0a",
          raised: "#141414",
          line: "#2a2a2a",
          ink: "#f5f5f5",
          muted: "#d4d4d8",
        },
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        tightish: "-0.015em",
        tighter2: "-0.04em",
      },
      maxWidth: {
        prose: "640px",
        page: "720px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
