/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#192a56",
        secondary: "#f5f6fa",
        accent: "#ffd900",
        backdrop: "#dcdde1",
        "black-100": "#100d25",
        "black-100": "#090325",
        "black-100": "#f3f3f3",
      },
      backgroundImage: {
        hero: "url('/src/assets/logo.png')",
        alt: "bg-image",
      },
      phone: {
        number: "068 529 5764",
      },
    },
  },
  plugins: [],
}

