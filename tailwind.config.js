/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        temp: "2 1fr 3fr",
      },
      transition: {
        image: "transform 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
