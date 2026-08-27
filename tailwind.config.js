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
        accent: {
          // amber-700, not amber-600: 5.0:1 on #fff, so 12px accent text passes WCAG AA
          DEFAULT: "#b45309",
          dark: "#f59e0b",
        },
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
        page: "880px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        blink: "blink 1.1s steps(2, start) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
