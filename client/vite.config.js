import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx}", // adjust according to your project
  ],
  theme: {
    extend: {
      colors: {
        "custom-bgColor": "#242423",
        "custom-btnColor": "#178582",
        "custom-txtColor": "#F4F3EE",
        "custom-pgsColor": "#24A147",
        "custom-logoColor": "#FC93AD",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
