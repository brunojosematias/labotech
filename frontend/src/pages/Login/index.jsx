import React from 'react';

import aline from '../../assets/images/aline.svg';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/icons/arrow.svg';



export function Login() {
  return (
    <>
    <section className= "h-screen px-7 bg-background">
      <div className="flex items-center pt-6 pl-6">
        <a href="" className="w-10 mr-3.5">
          <img src={arrow} alt="Arrow" border="0"/>
        </a>
        <img src={logo} alt="Logo" border="0"/>
      </div>

      <div className="flex items-center justify-between">
      <div className="text-orange pl-16">
          <p className="text-white font-extralight text-center leading-10 pt-6">Bem-Vindo(a) de volta ao <span className="text-orange font-normal">LaboTech</span>!<br/>
            Os <span className="text-orange">LaboInstrutores</span> estavam com saudades!</p>
          <img src={aline} alt="Aline" border="0" className="w-11/12"/>
        <p className="text-white font-medium pl-80 pt-3"><span className="text-orange">Aline</span> te dá boas-vindas!</p>
      </div>

      <div>
          <h2 className="text-orange font-medium text-3xl text-center pr-60 mb-16">Login</h2>

          <div>
            <form className="flex flex-col text-orange pr-60" action="#" method="POST">
                  <input type="email" name="email" placeholder="E-mail" id="email" autoComplete="email"
                  required className="bg-background border rounded-3xl mb-7 py-3 pl-8  hover:border-orange"/>

                  <input type ="password" name="password" placeholder="Senha" id="password" autoComplete="current-password"
                  required className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 hover:border-orange"/>

              <div className="flex">
                <div className="text-white font-extralight flex items-center">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe" className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"/> <label for="rememberMe">Lembrar de mim</label>
                </div> 

                <div className="text-white underline font-bold ml-24 hover:text-orange">
                    <a href="#">Esqueceu a senha?</a>
                  </div>
              </div>
              
              <button type="submit" className="w-full text-orange text-center bg-background font-medium border-2 border-orange my-5 rounded-3xl py-3 hover:bg-orange hover:text-black transition-all">
                  Entrar
              </button>
            </form>

            <div className="font-extralight">
            <p className="text-white">Ainda não é membro?
              <a href="#" className="text-orange underline ml-1 hover:text-white" id="cadastrar">Cadastre-se agora mesmo!</a>
            </p>
            </div>
          </div>
        </div>
      </div>


   
    </section>
    </>
  )
}