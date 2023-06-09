import { Timer } from "../../components/Timer";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import { Button } from "../../components/Button";

export function InitExercice() {
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
  }
  return (
    <div className=" min-800 mx-w-full">
      <div className="bg-background h-full justify-center items-center">
        <Navbar />
        <div className="border-b-[1px] bg-cinza_escuro mx-20 opacity-25"></div>

        <div className="container mx-auto flex items-center justify-around">
          <div className="bg-cinza_claro h-96 w-[44rem]">
            <img src="" alt="" />
          </div>

          <div className="bg-background">
            <div className="flex flex-col justify-center items-center">
              <div className="text-orange flex font-medium text-3xl mb-11 mt-52">
                Relaxamento de pescoço
              </div>

              <Timer start={isRunning} />
            </div>

            <h2 className="flex font-medium text-white text-2xl pl-64 pt-4 ">
              Minutos
            </h2>

            <div className="ml-4">
              <div className="text-orange flex font-medium text-3xl pt-28 text-center">
                Próximo exercício:
              </div>
              <div className="flex text-white text-3xl pt-6">
                Alívio para punhos
              </div>
              <h5 className=" text-white flex pt-4">Durante 5 minutos</h5>
            </div>

            <div className="mt-44 pb-14">
              <div className="flex text-white pt-2 text-2xl pl-60">
                Tudo pronto?
              </div>

              <div className="mt-3 ml-60">
                <Button onClick={handleStart}>Começar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
