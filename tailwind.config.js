/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#1F1F1F",
        customBlue: "#1E40AF",
        customBlack: "#121212",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
