/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "text-merah": "#ff0000",
        "ijo-lumut": "#5E5400",
        "paslon-pink": "#FF6384",
        "paslon-kuning": "#FFCD56",
        "paslon-biru": "#36A2EB",
        "paslon-pink-tua": "#5E0000",
        "paslon-kuning-tua": "#5E5400",
        "paslon-biru-tua": "#005E4D",
        "tombol-suaramu": "#5E5A00",
      },
    },
  },
  plugins: [require("rippleui"), require('flowbite/plugin')],
};
