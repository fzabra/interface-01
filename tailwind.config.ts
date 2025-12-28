import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-bebas-neue)", "var(--font-space-grotesk)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(18px)" },
        },
        scan: {
          "0%": { transform: "translateX(-12%)" },
          "100%": { transform: "translateX(12%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
        scan: "scan 12s linear infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
