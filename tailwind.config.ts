import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Product Brand Colors - Easy to change in one place
        mcu: {
          DEFAULT: "#60a5fa", // blue-400 for AltiCoreMCU
          dark: "#3b82f6",    // blue-500 for hover states
        },
        sw: {
          DEFAULT: "#2dd4bf", // teal-400 for AltiCoreSW
          dark: "#14b8a6",    // teal-500 for hover states
        },
        hdl: {
          DEFAULT: "#f59e0b", // amber-500 for AltiCoreHDL
          dark: "#d97706",    // amber-600 for hover states
        },
      },
    },
  },
  plugins: [],
};

export default config;
