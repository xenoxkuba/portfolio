/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'dataS': "url('../public/dataS.jpg')", // Ścieżka do obrazka w folderze "public"
      }
    },
  },
  plugins: [],
};
