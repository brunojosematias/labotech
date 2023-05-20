export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#202124",
        orange: "#FF725C",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      backgroundImage: {
        "aline-and-arthur": "url('./assets/images/aline-and-arthur.svg')",
        "emily-and-lucas": "url('./assets/images/emily-and-lucas.svg')",
        aline: "url(./assets/images/aline.svg)",
      },
    },
  },
  plugins: [],
};
