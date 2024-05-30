import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        // xm: "376px",
        // sL: "426px",
        sm: "426px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2 Extra large screens
        // Custom max sizes
        "max-xs": { max: "320px" },
        // "max-xm": { max: "376px" },
        // "max-sL": { max: "426px" },
        "max-sm": { max: "426pxpx" }, // Maximum width 640px
        "max-md": { max: "768px" }, // Maximum width 768px
        "max-lg": { max: "1024px" }, // Maximum width 1024px
        // Custom min sizes
        "min-xs": { min: "320px" },
        // "min-xm": { min: "376px" },
        // "min-sL": { min: "426px" },
        "min-lg": { min: "1024px" }, // Minimum width 1024px
        "min-md": { min: "768px" }, // Minimum width 768px
        "min-sm": { min: "426px" }, // Minimum width 640px
      },
      colors: {
        "dark-blue-primary": "var(--dark-blue-primary)",
        "background-primary": "var(--backgroud-primary)",
        "text-primary": "var(--text-primary)",
        primary: "var(--primary)",
        "hover-primary": "var(--hover_primary)",
        secondary: "var(--secondary)",
        // white: "var(--white)",
        gray: "var(--gray)",
        error: "var(--error)",
        "error-bg": "var(--error_bg)",
        success: "var(--success)",
        "success-bg": "var(--success_bg)",
        link: "var(--link)",
        "input-color": "hsla(0, 0%, 100%, .1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
