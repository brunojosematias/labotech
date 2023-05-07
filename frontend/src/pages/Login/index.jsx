import React from 'react';

import aline from '../../assets/images/aline.svg';


export function Login() {
  return (
    <>
    <section className= "h-screen px-7 bg-background">
      <div className="flex items-center">
        <a href="https://imgbb.com/" className="w-10 mr-1.5">
          <img src="https://i.ibb.co/3yp240w/image.png" alt="image" border="0"/>
        </a>
        <h3 className="text-orange text-3xl">LaboTech</h3>
      </div>

      <div className="">
        
      </div>

      <div className="flex items-center justify-between">
      <div className="text-orange">
          <p className="text-white font-extralight text-center">Bem-Vindo(a) de volta ao <span className="text-orange font-normal">LaboTech</span>!<br/>
            Os <span className="text-orange">LaboInstrutores</span> estavam com saudades</p>
          <img src={aline} alt="Aline" border="0" />
        <p className="text-white font-medium"><span className="text-orange">Aline</span> te dá boas-vindas!</p>
      </div>

      <div className="">
          <h2 className="text-orange font-medium text-2xl">Login</h2>

          <div className="">
            <form className="flex flex-col" action="#" method="POST">
                  <input type="email" name="email" value="" placeholder="E-mail" id="email" autoComplete="email"
                  required  className="bg-background border rounded-3xl mb-7 py-3 pl-8"/>

                  <input type ="password" name="password" value="" placeholder="Senha" id="password" autoComplete="current-password"
                  required className="bg-background border rounded-3xl mb-4 py-3 pl-8"/>

              <div className="flex">
                <div className="text-white font-extralight">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Lembrar de mim</label>
                </div> 

                <div  className="text-white underline font-bold ml-24">
                    <a href="#">Esqueceu a senha?</a>
                  </div>
              </div>
              
              <button type="submit" className="w-full text-orange text-center bg-background font-medium border-2 border-orange my-5 rounded-3xl py-3 hover:bg-orange hover:text-black transition-all">
                  Entrar
              </button>
            </form>

            <div className="font-extralight">
            <p className="text-white">Ainda não é membro?
              <a href="#" className="text-orange underline" id="cadastrar">Cadastre-se agora mesmo!</a>
            </p>
            </div>
          </div>
        </div>
      </div>


   
    </section>
    </>
  )
}