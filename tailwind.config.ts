import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_pink: "#EC0988",
        primary_blue: "#69DACF",
        primary_black: "#0E0F10",
        white: "#FFF",
        black90: "#141516",
        black80: "#292A2E",
        gray20: "#6A6B6C",
        gray10: "#5F5F5F",
      },
      skew: {
        '20': '20deg',
      },
    },
  },
  plugins: [],
};
export default config;
