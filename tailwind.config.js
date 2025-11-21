/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B4D9D', // Example from image (purple)
        secondary: '#F3F4F6',
      },
    },
  },
  plugins: [],
}
