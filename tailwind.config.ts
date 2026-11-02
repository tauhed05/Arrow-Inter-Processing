import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",
        accent: "#528788",
        light: "#F0F7F4",
        // Not named "base": that clashes with Tailwind's text-base font-size class.
        paper: "#FAF9F5",
        ink: "#13261d",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
