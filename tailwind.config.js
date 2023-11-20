/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#85c042",
        accentColor: "#f9a800",
        primaryGray: "#4B5768",
        fadedGrey: "#CBCBCB",
        notification: {
          background: "#F33D3D",
          text: "#3A0E0E",
        },
      },
      animation: {
        scale: "scale-in-center 2s ease-in-out infinite",
      },
      keyframes: {
        "scale-in-center": {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(0.5)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
