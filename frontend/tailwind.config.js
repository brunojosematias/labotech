export default {
  content: ["./src/**/*.{html,ts,tsx}"],
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
        mono: ["Roboto Mono", "monospace"],
      },

      backgroundImage: {
        "aline-and-arthur": "url('./assets/images/aline-and-arthur.svg')",
        "aline-and-arthur2": "url('./assets/images/aline-and-arthur2.svg')",
        "emily-and-lucas": "url('./assets/images/emily-and-lucas.svg')",
        "emily-and-lucas2": "url('./assets/images/emily-and-lucas2.svg')",
        aline: "url(./assets/images/aline.svg)",
        laboinstrutores: "url(./assets/images/laboinstrutores.svg)",
      },
    },
  },
  plugins: [],
};
