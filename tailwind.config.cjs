/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "black-100": "var(--black-100)",
        "black-200": "var(--black-200)",
        "white-100": "var(--white-100)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        "accent-purple": "#8b5cf6",
        "accent-blue": "#3b82f6",
        "accent-cyan": "#06b6d4",
        "accent-emerald": "#10b981",
        "accent-pink": "#ec4899",
      },
      boxShadow: {
        card: "var(--card-shadow)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.25)",
        "glass-hover": "0 14px 40px 0 rgba(139, 92, 246, 0.2)",
        "glass-light": "0 8px 30px 0 rgba(15, 23, 42, 0.08)",
        "glow-purple": "0 0 25px -5px rgba(139, 92, 246, 0.5)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.5)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "var(--hero-pattern)",
        "liquid-mesh": "radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(6, 182, 212, 0.15) 0px, transparent 50%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "glass-gradient-light": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
        },
      },
    },
  },
  plugins: [],
};

