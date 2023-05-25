import { Stepper } from "../../components/Stepper";

import { FirstForm } from "./steps/FirstForm";

export function AnamnesisForm() {
  return (
    <div className="bg-background h-screen">
      <div className="container m-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-44">
            <h1 className="text-2xl text-orange">
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

        <span className="text-white flex justify-end max-w-6xl mt-8">
          Passo 1 - 4
        </span>
        <div className=" w-full block justify-center">
          <FirstForm />
        </div>
      </div>
    </div>
  );
}
