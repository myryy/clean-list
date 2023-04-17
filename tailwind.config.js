/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jb-mono": ["JetBrains Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
