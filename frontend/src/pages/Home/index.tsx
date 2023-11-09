import { useState, useEffect } from "react";

import { Navbar } from "../../components/Navbar";
import { ButtonStart } from "../../components/ButtonStart";

import logo from "../../assets/logo.svg";
import arthur from "../../assets/images/arthur-2.svg";
import alinecelular from "../../assets/images/aline-fone.svg";
import emily from "../../assets/images/emily-exercise.svg";
import comment1 from "../../assets/images/comment-1.svg";
import comment2 from "../../assets/images/comment-2.svg";
import laboInstrutores from "../../assets/images/labo-instrutores.svg";

export function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="bg-background scroll-smooth font-nunito">
      <div className="container mx-auto">
        <div className="fixed top-0 left-0 w-full">
          <Navbar heightScroll={scroll} />
        </div>

        <section className="px-10 pt-32 md:px-44 md:pt-48" id="home">
          <div className="flex-col items-center gap-[9.125rem] md:flex md:flex-row">
            <img src={arthur} alt="Arthur foto" />

            <div className="text-center text-white mt-6">
              <h1 className="text-3xl mb-12 md:mb-[8.1875rem]">
                Bem-vindo(a) ao <span className="text-orange">LaboTech</span>!
              </h1>

              <p className="flex flex-col text-center text-lg">
                <span className="mb-5">
                  Se sente <span className="text-orange">cansado</span>?{" "}
                  <span className="text-orange">Travado</span>?
                </span>
                Deixe com a gente!
                <br />
                Com as nossas listas de exercícios
                <br />
                personalizados você voltará
                <br />
                a trabalhar com sua capacidade
                <br />
                máxima!
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pt-36" id="comments-app">
          <h2 className="text-orange text-5xl text-center mb-[4.8125rem]">
            O app
          </h2>
          <div className="mt-[5.3125rem] text-center md:ml-36 md:flex">
            <p className="text-white text-center text-2xl mb-[3.5625rem]">
              Um app para melhorar seu <br />
              bem-estar durante o trabalho!
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1.125rem] md:flex md:flex-row md:justify-end md:gap-36">
            <div className="md:mt-24">
              <img
                src={comment1}
                alt=""
                className="w-[20.0625rem] h-[11.8125rem] md:w-[25.125rem] md:h-[12.125rem]"
              />
              <img
                src={comment2}
                alt=""
                className="ml-36 w-[20.0625rem] h-[11.8125rem] md:w-[25.125rem] md:h-[12.125rem] md:ml-80"
              />
            </div>

            <img
              src={alinecelular}
              alt="Aline com o celular"
              className="order-first md:order-none"
            />
          </div>
        </section>

        <section className="px-5 pt-36" id="informations-exercises">
          <h2 className="text-orange text-5xl text-center mb-[4.8125rem]">
            Exercícios personalizados
          </h2>
          <div className="flex-col items-center gap-72 md:flex md:flex-row">
            <img
              src={emily}
              alt="Mulher se alongando"
              className="w-80 ml-20 md:ml-28 md:w-4/12"
            />

            <div className="text-center text-white text-lg mt-[2.0625rem] flex flex-col gap-10 md:gap-16 md:mt-0">
              <p>
                Nós disponibilizaremos{" "}
                <span className="text-orange">inúmeros</span>
                <br />
                <span className="text-orange">exercícios</span> que irão suprir
                as suas
                <br />
                mais diversas necessidades!
                <br />
              </p>

              <p>
                <span className="text-orange">Dores na coluna</span> por ficar
                sentado
                <br />o dia inteiro numa{" "}
                <span className="text-orange">posição desconfortável?</span>
                <br />
                Não se preocupe! A gente cuida disso!
                <br />
              </p>

              <p>
                <span className="text-orange">Dores no pescoço</span>? Não seja
                por isso!
                <br />
                Nós cuidaremos disso também!
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pt-36" id="instructors">
          <h2 className="text-orange text-5xl text-center mb-[4.8125rem]">
            Os LaboInstrutores
          </h2>
          <div className="flex flex-col gap-[2.5rem] md:gap-48 md:flex md:flex-row md:items-center md:justify-center">
            <div className="text-center text-white text-lg flex flex-col gap-[2.3125rem] md:gap-16">
              <p>
                Conheça a nossa equipe de{" "}
                <span className="text-orange">LaboInstrutores</span>!<br />
              </p>

              <p>
                São eles quem vão te{" "}
                <span className="text-orange">
                  guiar por todos os
                  <br />
                  seus exercícios.
                </span>
                !<br />
              </p>

              <p>
                Eles estão te esperando de braços abertos.
                <br />
                Junte-se agora a eles na{" "}
                <span className="text-orange">LaboTech</span>!
              </p>
            </div>

            <img src={laboInstrutores} alt="Instrutores LaboTech" />
          </div>
        </section>

        <section className="pt-40 md:px-36 md:pt-56">
          <div className="bg-aline-and-arthur2 bg-no-repeat bg-center bg-contain h-screen md:bg-aline-and-arthur"></div>
        </section>

        <section className="pt-8 pb-36 md:px-36 md:pt-80 md:pb-[16.625rem]">
          <div className="bg-emily-and-lucas2 bg-no-repeat bg-center bg-contain h-screen md:bg-emily-and-lucas"></div>
        </section>

        <ButtonStart />

        <footer className="h-20 pl-7">
          <img src={logo} alt="Logo LaboTech" />
        </footer>
      </div>
    </div>
  );
}
