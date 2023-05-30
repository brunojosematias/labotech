import React from "react";

import emily from "../../assets/images/emily-tired.svg";
import aline2 from "../../assets/images/aline-2.svg";

import { NavBar } from "../../components/Navbar";
import { Timer } from "../../components/Timer";

export function Exercises() {
  return (
    <div className="bg-background h-screen px-7">
      <NavBar />
      <div className="container mx-auto">
        <div className="bg-cinza_claro flex items-center rounded-3xl mx-10 mt-3 h-24">
          <img
            src={emily}
            alt="Emily cansada"
            className="w-36 text-white ml-24 absolute top-20"
          />
          <p className="text-white font-normal ml-72 text-xl">
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

        <div className="flex">
          <div className="bg-cinza_escuro pt-8 ml-36 mt-10 w-72 text-center">
            <p className="text-white">
              Lembre de fazer seus
              <br />
              exercícios diários!
            </p>
            <img src={aline2} alt="Aline" />
          </div>

          <div className="block">
            <div className="ml-80 pt-6">
              <Timer />
            </div>

            <button className="w-96 ml-80 text-orange text-center bg-background font-normal text-xl border-2 border-orange rounded-2xl py-4 mt-4 hover:bg-orange hover:text-black transition-all">
              Começar exercícios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
