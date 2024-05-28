import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
