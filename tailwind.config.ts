import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // All files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // All files in the app directory
  ],
  theme: {
    screens: {
      mobile: "500px",
      sm: "600px",
      md: "900px",
      lg: "1100px",
      desktop: "1200px",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
