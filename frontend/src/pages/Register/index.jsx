import React from "react";

import laboinstrutores from "../../assets/images/labo-instrutores.svg";
import laboinstrutores2 from "../../assets/images/labo-instrutores2.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Button } from "../../components/Button";

export function Register() {
  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto md:h-screen">
          <div className="flex items-center pt-6 pl-6 mb-10">
            <a href="" className="w-10 mr-3.5">
              <img src={arrow} alt="Arrow" border="0" />
            </a>
            <img src={logo} alt="Logo" border="0" />
          </div>

          <div className="flex items-center justify-around">
            <div className="flex md:gap-14">
              <div>
                <h2 className="text-orange font-medium text-3xl pt-8 mb-16 text-center">
                  Registrar
                </h2>
                <form
                  className="font-extralight text-white md:pt-5 "
                  action="#"
                  method="POST"
                >
                  <div className="flex gap-6">
                    <input
                      type="nome"
                      name="nome"
                      placeholder="Nome"
                      id="nome"
                      autoComplete="nome"
                      required
                      className="bg-background border rounded-3xl mb-7 py-3 pl-7 md:w-48 focus:outline-none focus:border-orange transition-all"
                    />

                    <input
                      type="sobrenome"
                      name="sobrenome"
                      placeholder="Sobrenome"
                      id="sobrenome"
                      autoComplete="sobrenome"
                      required
                      className="bg-background border rounded-3xl mb-7 py-3 pl-8 md:w-48 focus:outline-none focus:border-orange transition-all"
                    />
                  </div>

                  <div
                    className="flex flex-col"
                    action="#"
                    method="POST"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      id="email"
                      autoComplete="email"
                      required
                      className="bg-background border rounded-3xl mb-4 py-3 pl-8 mx-3 md:mx-0 md:w-6/11 focus:outline-none focus:border-orange transition-all"
                    />

                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      id="password"
                      autoComplete="current-password"
                      required
                      className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2  mx-3 md:mx-0 md:w-6/11 focus:outline-none focus:border-orange transition-all"
                    />

                    <input
                      type="password"
                      name="password"
                      placeholder="Confirmar senha"
                      id="password"
                      autoComplete="current-password"
                      required
                      className="bg-background border rounded-3xl mb-8 py-3 pl-8 pr-2 mx-3 md:mx-0 md:w-6/11 md:mb-4 focus:outline-none focus:border-orange transition-all"
                    />

                    <div className="flex flex-col leading-7 ml-5">
                      <div className="flex text-white font-extralight items-center outline-none">
                        <input
                          type="checkbox"
                          value="readterms"
                          id="readterms"
                          className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                        />

                        <a
                          href="#"
                          className="underline decoration-1 hover:text-orange"
                        >
                          Li e concordo com os termos de uso do{" "}
                          <span className="text-orange underline">
                            {" "}
                            LaboTech
                          </span>
                        </a>
                      </div>

                      <div className="text-white font-extralight flex items-center outline-none">
                        <input
                          type="checkbox"
                          value="notification"
                          id="noyification"
                          className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                        />
                        <label for="notification">
                          Receber as notas de atualização via e-mail{" "}
                        </label>
                      </div>
                    </div>

                    <div className="mt-8 mb-9 mx-3 md:mx-0 md:w-6/11">
                      <Button>Seguir para a ficha de anamnese</Button>
                    </div>
                    <div className="md:hidden block text-center">
                      <p>
                        Quer ignorar o preenchimento da ficha de anamnese
                        <br/>e seguir para o app?
                      </p>
                      <a href="#" className="underline decoration-1 hover:text-white text-orange">
                        Clique aqui
                      </a>
                      <img
                        src={laboinstrutores2}
                        alt="LaboInstrutores"
                        className="ml-24 mt-5 md:hidden block"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <div className="text-orange hidden md:block">
                  <div className=" text-center mb-7">
                    <p className="text-white font-extralight">
                      Primeira vez usando o
                      <span className="text-orange font-normal"> LaboTech</span>
                      ?<br />
                      Crie sua conta gratuita agora mesmo!
                    </p>
                  </div>
                  <div className="text-center mb-6 pt-6 pl-6">
                    <div className="container mx-auto">
                      <p className="text-white font-extralightpt-3 text-sm md:text-base">
                        Nossos{" "}
                        <span className="text-orange">Laboinstrutores</span> te
                        esperam de braços abertos!
                      </p>
                    </div>

                    <div>
                      <img
                        src={laboinstrutores}
                        alt="LaboInstrutores"
                        className="text-white w-52 md:ml-40 md:w-7/12"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
