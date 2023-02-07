/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blurple: "#5865F2",
        blurple_dark: "#404EEE",
        discord_green: "#57F287",
        discord_blue: "#295DE7",
        discord_purple: "#5865f2",
        discord_red: "#ED4245",
      },
    },
  },
  plugins: [],
};
