/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'BG_COLOR_YELLOW': '#fe9900', // Your desired gray color
      'BG_COLOR_YELLOW_Light': '#fbfb91', // Your desired gray color
   
    }},
  },
  plugins: [],
}

