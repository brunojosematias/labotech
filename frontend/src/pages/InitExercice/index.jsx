import React from "react";

import { Timer } from "../../components/Timer";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Navbar } from "../../components/Navbar";

export function InitExercice() {
  return (
    <div>
      <div className="bg-background justify-center items-center h-full md:h-screen">
        <Navbar />
        <div className="border-b-[1px] bg-cinza_escuro mx-20 opacity-25"></div>

        <div className="container mx-auto justify-around md:text-start mt-16 block md:flex md:mt-16">
          <div className="bg-cinza_claro rounded-xl h-[40rem] w-[25rem] mx-14 md:mx-0 md:h-96 md:w-[44rem]">
            <img src="" alt="" />
          </div>

          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-orange flex font-medium text-2xl mb-11 mt-12 md:mt-0">
                Rotação de pescoço
              </div>

              <Timer />
            </div>

            <h2 className="flex font-medium text-white text-2xl pl-64 pt-4 ml-16 md:ml-2">
              Minutos
            </h2>

            <div className="ml-32 md:ml-4">
              <div className="text-orange flex font-medium text-xl pt-20 md:pt-16">
                Próximo exercício:
              </div>
              <div className="text-white text-xl pt-5">
                Inclinação de cabeça E D
              </div>
              <h5 className="text-white pt-3">Durante 5 minutos</h5>
            </div>

            <div className="pb-7 mt-10 md:mt-7">
              <div className="flex text-white pt-2 text-xl ml-48 md:ml-60">
                Tudo pronto?
              </div>

              <div className="mt-3 mx-48 md:mr-0 md:ml-60">
                <ButtonSubmit>Começar</ButtonSubmit>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
