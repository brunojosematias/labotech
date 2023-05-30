
import React from 'react';
import { Link } from "react-router-dom";

import laboinstrutores from "../../assets/images/labo-instrutores.svg";
import logo from '../../assets/logo.svg';
import arrow from '../../assets/icons/arrow.svg';
import { Button } from "../../components/Button";

export function Register() {
  return (
    <>
      <div className="bg-background h-screen px-7 container mx-auto">
        <div className="flex items-center pt-20 pl-6 mb-10">
          <a href="" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" border="0" />
          </a>
          <img src={logo} alt="Logo" border="0" />
        </div>




        <div className="flex items-center justify-between ">



          <div className="flex gap-64 ml-36">
            <div>
              <h2 className="text-orange font-medium text-3xl text-center pt-8 mb-16">
                Registrar
              </h2>
              <form
                className="  font-extralight text-white  "
                action="#"
                method="POST"
              >

                <div className=" flex font-extralight text-white gap-6 ">

                  <input
                    type="nome"
                    name="nome"
                    placeholder="Nome"
                    id="nome"
                    autoComplete="nome"
                    required
                    className="bg-background border rounded-3xl mb-7 py-3 pl-7 w-48 focus:outline-none focus:border-orange transition-all"
                  />

                  <input
                    type="sobrenome"
                    name="sobrenome"
                    placeholder="Sobrenome"
                    id="sobrenome"
                    autoComplete="sobrenome"
                    required
                    className="bg-background border rounded-3xl mb-7 py-3 pl-8 w-48  focus:outline-none focus:border-orange transition-all"
                  />

                </div>

                <div className="flex  flex-col font-extralight text-white  "
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
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 w-6/11 focus:outline-none focus:border-orange transition-all"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Confirmar senha"
                    id="password"
                    autoComplete="current-password"
                    required
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all"
                  />

                  <div className='flex flex-col leading-7 ml-5'>

                      <div className="flex text-white font-extralight items-center outline-none">
                        <input
                          type="checkbox"
                          value="lsRememberMe"
                          id="rememberMe"
                          className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                        />

                        <a href="#" className="underline hover:text-orange">Li e concordo com os termos de uso do <span className="text-orange"> LaboTech</span></a>
                      </div>

                    <div className="text-white font-extralight flex items-center outline-none">
                      <input
                        type="checkbox"
                        value="lsRememberMe"
                        id="rememberMe"
                        className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                      />
                      <label for="rememberMe">Receber as notas de atualização via e-mail </label>
                    </div>
                  </div>

                  <div className="mt-5 mb-8 w-6/11">
                    <Button>Seguir para a ficha de anamnese</Button>
                  </div>
                </div>
              </form>


            </div>
            <div>
              <div className="text-orange">

                <div className=" text-center mb-7">
                <p className="text-white font-extralight">
                  Primeira vez usando o
                  <span className="text-orange font-normal"> LaboTech</span>?<br />
                  Crie sua conta gratuita agora mesmo!
                  
                </p>
                </div>
                <div  className=" text-center mb-2">
                <p className="text-white font-extralightpt-3">
                  Nossos <span className="text-orange">Laboinstrutores</span> te esperam de braços abertos!
                </p>
                </div>
              </div>

              <img src={laboinstrutores} alt="LaboInstrutores"className="w-11/12" />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}