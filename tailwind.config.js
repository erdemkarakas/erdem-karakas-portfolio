/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0074de",
        secondary: "#69778c",
        dark: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "-apple-system", "BlinkMacSystemFont"],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "spin-slow": "spin 8s linear infinite",
        "coin-flip": "coinFlip 2s ease-out",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        coinFlip: {
          "0%": { transform: "rotateY(0deg) scale(0.5)", opacity: 0 },
          "60%": { transform: "rotateY(1080deg) scale(1)", opacity: 1 },
          "100%": { transform: "rotateY(1080deg) scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
