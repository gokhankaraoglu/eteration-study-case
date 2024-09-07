/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#2a59fe",
        "base-background-color": "#f9f9f9",
        "image-placeholder-color": "#c4c4c4",
        "gray-text-color": "#333333",
        "black-text-color": "#000000",
        "white-text-color": "#ffffff",
      },
    },
  },
  plugins: [],
};
