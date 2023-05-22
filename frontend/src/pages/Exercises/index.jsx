import React from "react";

import aline from "../../assets/images/aline.svg";
import aline2 from "../../assets/images/aline-2.svg";
import { NavBar } from "../../components/Navbar";

export function Exercises() {
  return (
    <div className="bg-background h-screen px-7">
      <NavBar />
      <div className="container mx-auto">
        <div className="bg-cinza_claro flex items-center rounded-3xl mx-10 relative">
          <img
            src={aline}
            alt="Aline"
            className="w-32 text-white ml-16 absolute"
          />
          <p className="text-white font-normal ml-20 text-xl">
            Quer revisitar sua ficha de anamnese?
            <a
              href="#"
              className="text-orange underline ml-1 hover:text-white"
              id="ficha_anamnese"
            >
              Clique aqui e veja agora
            </a>
            !
          </p>
        </div>

        <div className="bg-cinza_escuro pt-8 m-24 ml-40 w-80 text-center">
          <p className="text-white">
            Lembre de fazer seus
            <br />
            exercícios diários!
          </p>
          <img src={aline2} alt="Aline" />
        </div>
      </div>
    </div>
  );
}
