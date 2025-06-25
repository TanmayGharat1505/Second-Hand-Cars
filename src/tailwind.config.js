/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ensures Tailwind works with all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
