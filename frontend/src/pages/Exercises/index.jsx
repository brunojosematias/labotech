import React from "react";

import emily from "../../assets/images/emily-tired.svg";
import aline2 from "../../assets/images/aline-2.svg";

import { Navbar } from "../../components/Navbar";
import { Timer } from "../../components/Timer";
import { Table } from "../../components/Table";

export function Exercises() {
  return (
    <div className="bg-background md:px-7">
      <Navbar />
      <div className="container mx-auto">
        <div className="bg-cinza_claro flex items-center rounded-3xl mt-3 h-24 mx-4 md:mx-10 md:h-24">
          <img
            src={emily}
            alt="Emily cansada"
            className="text-white absolute w-36 top-[4.5rem] ml-8 md:ml-24 md:top-20 md:w-36"
          />
          <p className="text-white font-normal ml-44 md:ml-80 md:text-xl">
            Quer revisitar sua ficha de anamnese?
            <a
              href="#"
              className="text-orange underline decoration-1 ml-10 md:ml-1 hover:text-white"
              id="ficha_anamnese"
            >
              Clique aqui e veja agora
            </a>
            !
          </p>
        </div>

        <section className="md:flex">
          <div className="bg-cinza_escuro mt-10 mb-10 justify-around text-center mx-6 items-center flex md:pt-8 md:mx-0 md:block md:text-xl md:ml-36 md:w-96 md:mt-20">
            <p className="text-white order-2 md:mb-9 md:order-1">
              Lembre de fazer seus
              <br />
              exercícios diários!
            </p>
            <img src={aline2} alt="Aline" className="w-36 md:w-full" />
          </div>

          <div className="block">
            <div>
              <div className="pt-8 md:pt-14 md:ml-44">
                <Timer />
              </div>

              <button className="w-96 ml-14 text-orange text-center bg-background font-normal text-xl border-2 border-orange rounded-2xl py-4 mt-4 hover:bg-orange hover:text-black transition-all md:ml-80">
                Começar exercícios
              </button>
            </div>

            <div className="md:ml-36">
              <Table />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
