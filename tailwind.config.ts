import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep background + surfaces for the "Bold Moderne" aesthetic
        ink: {
          DEFAULT: "#06060A",
          900: "#0A0A12",
          800: "#12121E",
          700: "#1B1B2B",
          600: "#262638",
        },
        brand: {
          violet: "#7C3AED",
          magenta: "#EC4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.15) 100%)",
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(124, 58, 237, 0.5)",
        "glow-magenta": "0 0 60px -15px rgba(236, 72, 153, 0.45)",
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-slower": "float 13s ease-in-out infinite",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(15px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
