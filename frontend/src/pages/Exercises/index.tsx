import { Navbar } from "../../components/Navbar";
import { Timer } from "../../components/Timer";

import emily from "../../assets/images/emily-tired.svg";
import aline2 from "../../assets/images/aline-2.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";

interface IExercises {
  id: string;
  name: string;
  type: string;
  time: number;
  level: number;
  demonstration: string;
}

interface IFirstFormValues {
  id: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  profession: string;
  sittingOrStanding: string;
  jointProblems: string;
  healthProblems: string;
  napeNeck: string;
  upperBack: string;
  lowerBack: string;
  legs: string;
  knees: string;
  feetAndAnkles: string;
}

export function Exercises() {
  const auth = useContext(AuthContext);

  const [exercises, setExercises] = useState<IExercises[]>([]);
  const [anamsesisFormDatas, setAnamsesisFormDatas] =
    useState<IFirstFormValues>();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const responseExercises = await api.get("/exercises");
        const responseAnamnesisForm = await api.get(
          `/users/${auth.user?.id}/anamnesis`,
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        );

        setExercises(responseExercises.data);
        setAnamsesisFormDatas(responseAnamnesisForm.data);
      } catch (error) {
        console.error("Erro ao buscar o formulário de anamnese:", error);
      }
    };

    fetchExercises();
  }, []);

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
            <div className="flex flex-col justify-center items-center">
              <div className="pt-8 mb-6 md:pt-14">
                <Timer />
              </div>

              <Link
                to="/iniciar-exercicios"
                className="text-orange text-center bg-background font-normal text-xl border-2 border-orange rounded-2xl py-6 px-28 mt-4 hover:bg-orange hover:text-black transition-all"
              >
                Começar exercícios
              </Link>
            </div>

            <div className="md:ml-36">
              <div className="flex-1 flex flex-col p-14">
                <h1 className="text-2xl text-orange">Meu Histórico</h1>
                <div className="flex-1 overflow-auto mt-8">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="bg-orange p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                          Exercícios de hoje
                        </th>
                        <th className="bg-orange p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                          Duração
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {exercises.map((item) => {
                        const level = Number(anamsesisFormDatas?.napeNeck);

                        if (
                          item.type === "nuca_pescoco" &&
                          Math.floor((item.level - 1) / 2) ===
                            Math.floor((level - 1) / 2) &&
                          level !== 0
                        ) {
                          return (
                            <tr
                              key={item.id}
                              className="text-white bg-cinza_escuro"
                            >
                              <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                                {item.name}
                              </td>
                              <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                                {item.time >= 60
                                  ? `${Math.floor(item.time / 60)} minutos`
                                  : `${item.time} segundos`}
                              </td>
                            </tr>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}