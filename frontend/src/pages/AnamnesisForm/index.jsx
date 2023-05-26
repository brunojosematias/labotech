import React from "react";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Stepper } from "../../components/Stepper";

import { FirstForm } from "./steps/FirstForm";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export function AnamnesisForm() {
  return (
    <div className="bg-background h-screen scroll-smooth pb-10 md:px-7">
      <div className="container mx-auto">
        <div className="flex items-center pt-6 pl-6">
          <a href="" className="mr-3.5 w-10">
            <img src={arrow} alt="Arrow" border="0" />
          </a>
          <img src={logo} alt="Logo" border="0" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-14 md:mt-9">
            <h1 className="text-orange text-xl md:text-2xl">
              Preencha os dados da ficha de anamnese
            </h1>
            <p className="text-base text-white text-center mt-4">
              Assim, poderemos escolher os exercícios <br /> que mais combinam
              com você
            </p>
          </div>

          <div className="mt-20">
            <Stepper />
          </div>
        </div>

        <span className="text-cinza_branco flex justify-end max-w-6xl mt-3 mb-7 md:ml-20">
          Passo 1 - 4
        </span>
        <div className=" w-full block justify-center">
          <FirstForm />
        </div>

        <div className="text-right mr-3 md:mr-0">
          <ButtonSubmit>Próximo</ButtonSubmit>
        </div>
      </div>
    </div>
  );
}
