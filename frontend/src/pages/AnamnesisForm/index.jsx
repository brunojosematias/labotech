import React from "react";

import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Stepper } from "../../components/Stepper";

import { FirstForm } from "./steps/FirstForm";
import { SecondForm } from "./steps/SecondForm";
import { ThirdForm } from "./steps/ThirdForm";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export function AnamnesisForm() {
  return (
    <div className="bg-background scroll-smooth pb-7 h-screen">
      <div className="container mx-auto">
        <div className="px-7">
          <div className="flex items-center pt-6 pl-6">
            <a href="" className="mr-3.5 w-10">
              <img src={arrow} alt="Arrow" border="0" />
            </a>
            <img src={logo} alt="Logo" border="0" />
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-14 md:mt-9">
              <h1 className="text-orange font-bold text-center text-xl md:text-2xl">
                Ficha de Anamnese
              </h1>
              <p className="texmb-base font-bold text-cinza_branco text-center mt-4">
                Olá, <span className="text-orange">Nome</span>, bem-vindo(a) à
                nossa estação de criação de ficha de anamnese!
              </p>
            </div>

            <div className="mt-20">
              <Stepper />
            </div>
          </div>

          <span className="text-cinza_branco font-bold flex justify-end max-w-6xl mt-3 mb-10 md:ml-20">
            Passo 1 - 3
          </span>

          <div className="w-full block justify-center">
            <FirstForm />
          </div>

          <div className="w-full bg-background flex justify-end">
            <div className="w-28 mr-10">
              <ButtonSubmit>Próximo</ButtonSubmit>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
