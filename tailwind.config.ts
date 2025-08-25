import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6556ff",
        secondary: "#1a21bc",
        grey: "#57595f",
        slateGray: "#f6faff",
        deepSlate: "#d5effa",
        success: "#43c639",
        midnight_text: "#222c44",
      },

      /* ---- Animation: scroll from bottom to top ---- */
      keyframes: {
        noticeCycle: {
          "0%": { opacity: "1", transform: "translateY(100%)" },   // off-screen bottom
          "5%": { opacity: "1", transform: "translateY(0)" },      // slide in
          "20%": { opacity: "1", transform: "translateY(0)" },     // stay
          "25%": { opacity: "1", transform: "translateY(-100%)" }, // slide out top
          "100%": { opacity: "1", transform: "translateY(-100%)" },
        },
      },
      animation: {
        notice: "noticeCycle linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
