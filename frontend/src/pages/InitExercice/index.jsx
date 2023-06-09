import React from "react";

import { Timer } from "../../components/Timer";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Navbar } from "../../components/Navbar";

export function InitExercice() {
  return (
    <div className=" min-800 mx-w-full">
      <div className="bg-background h-full justify-center items-center">
        <Navbar />
        <div className="border-b-[1px] bg-cinza_escuro mx-20 opacity-25"></div>

        <div className="container mx-auto justify-around md:text-start mt-16 block md:flex  md:mt-32">
          <div className="bg-cinza_claro rounded-xl h-[40rem] w-[25rem] mx-14 md:mx-0 md:h-96 md:w-[44rem]">
            <img src="" alt="" />
          </div>

          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-orange flex font-medium text-3xl mb-11 mt-12 md:mt-0">
                Relaxamento de pescoço
              </div>

              <Timer />
            </div>

            <h2 className="flex font-medium text-white text-2xl pl-64 pt-4 ml-16 md:ml-2">
              Minutos
            </h2>

            <div className="ml-32 md:ml-4">
              <div className="text-orange flex font-medium text-3xl pt-20 md:pt-28">
                Próximo exercício:
              </div>
              <div className="text-white text-3xl pt-6">Alívio para punhos</div>
              <h5 className="text-white pt-4">Durante 5 minutos</h5>
            </div>

            <div className="pb-7 mt-10 md:mt-44">
              <div className="flex text-white pt-2 text-2xl ml-44 md:ml-60">
                Tudo pronto?
              </div>

              <div className="mt-3 mx-44 md:mr-0 md:ml-60">
                <ButtonSubmit>Começar</ButtonSubmit>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
