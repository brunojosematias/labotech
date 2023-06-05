import React from "react";

import emily from "../../assets/images/emily-tired.svg";
import aline2 from "../../assets/images/aline-2.svg";

import { NavBar } from "../../components/Navbar";
import { Timer } from "../../components/Timer";
import { Table } from "../../components/Table";

export function Exercises() {
  return (
    <div className="bg-background px-4 md:px-7">
      <NavBar />
      <div className="container mx-auto">
        <div className="bg-cinza_claro flex items-center rounded-3xl mt-3 h-24 md:mx-10 md:h-24">
          <img
            src={emily}
            alt="Emily cansada"
            className="text-white absolute w-36 top-[4.5rem] ml-8 md:ml-24 md:top-20 md:w-36"
          />
          <p className="text-white font-normal ml-44 md:ml-72 md:text-xl">
            Quer revisitar sua ficha de anamnese?
            <a
              href="#"
              className="text-orange underline ml-10 md:ml-1 hover:text-white"
              id="ficha_anamnese"
            >
              Clique aqui e veja agora
            </a>
            !
          </p>
        </div>

        <div className="flex">
          <div className="bg-cinza_escuro pt-8 mt-36 mb-28 text-center md:ml-36 md:w-72">
            <p className="text-white">
              Lembre de fazer seus
              <br />
              exercícios diários!
            </p>
            <img src={aline2} alt="Aline" />
          </div>

            <div className="block">
              <div className="">
                <div className="ml-44 pt-6">
                  <Timer />
                </div>

                <button className="w-96 ml-80 text-orange text-center bg-background font-normal text-xl border-2 border-orange rounded-2xl py-4 mt-4 hover:bg-orange hover:text-black transition-all">
                  Começar exercícios
                </button>
              </div>

              <div className="ml-36">
                <Table />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
