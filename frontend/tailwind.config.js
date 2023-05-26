export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#202124",
        orange: "#FF725C",
        cinza_claro: "#323238",
        cinza_escuro: "#29292E",
        cinza_branco: "#AAAAAA",
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      backgroundImage: {
        "aline-and-arthur": "url('./assets/images/aline-and-arthur.svg')",
        "emily-and-lucas": "url('./assets/images/emily-and-lucas.svg')",
      },
    },
  },
  plugins: [],
};
