/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        45: "45px",
      },
      opacity: {
        18: "0.18",
      },
    },
  },
  plugins: [],
};
