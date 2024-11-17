/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        extraBoldItalic: 800, // Italics managed via styling
      },
      fontSize: {
        base: "18px", // Change default font size to 18px
      },
      colors: {
        primary: {
          default: "hsl(259, 100%, 65%)", // Purple
          lightRed: "hsl(0, 100%, 67%)", // Light red
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          offWhite: "hsl(0, 0%, 94%)",
          lightGrey: "hsl(0, 0%, 86%)",
          smokeyGrey: "hsl(0, 1%, 44%)",
          offBlack: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
