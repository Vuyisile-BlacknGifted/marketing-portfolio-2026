import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050a14",
        surface: "#f8fafc",
        ink: "#1f2937",
        muted: "#6b7280",
        accent: "#00d9ff",
        accentSoft: "#eaf2ff",
        navy: "#0f172a",
        greenDeep: "#10b981",
        slate: "#e5e7eb",
        border: "#e5e7eb",
        lightText: "#f8fafc",
        darkText: "#1f2937",
        // Futuristic colors
        cyan: "#00d9ff",
        purple: "#9d4edd",
        violet: "#a78bfa",
        neon: "#39ff14"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 41, 55, 0.06)",
        glow: "0 0 30px rgba(0, 217, 255, 0.3)",
        "glow-lg": "0 0 60px rgba(0, 217, 255, 0.4)",
        "glow-purple": "0 0 30px rgba(157, 78, 221, 0.3)",
        "inner-glow": "inset 0 0 20px rgba(0, 217, 255, 0.1)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      backdropBlur: {
        xs: "2px"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(0, 217, 255, 0.5)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        }
      }
    }
  },
  plugins: []
};

export default config;
