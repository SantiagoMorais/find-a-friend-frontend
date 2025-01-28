/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F15156",
        secondary: "#0D3B66",
        tertiary: "#F4D35E",
      },
    },
  },
};
