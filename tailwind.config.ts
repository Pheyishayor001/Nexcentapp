import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // All files in the components directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // All files in the app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
