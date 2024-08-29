/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        'home-man': "url('/src/assets/images/home-img-1.jpg')",
        'home-woman': "url('/src/assets/images/home-img-2.jpeg')",
      },
    },
  },
  plugins: [],
};
