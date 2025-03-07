
import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#99b760",
        blackshed: "#2e2d2d",
        hovershed: "#99b760E6",
        blackone: "#414040",
        gridimg: "#49ad6780",
        gridinfo: "#1b382480"
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      boxShadow: {
        "custom-shadow": "0 0 45px rgba(0, 0, 0, .2)", // Adjust values as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
