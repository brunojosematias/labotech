import React from 'react';


export function Login() {
  return (
    <>
    <section className= "bg-background">
      <div className="flex items-center">
        <a href="https://imgbb.com/" className="w-10">
          <img src="https://i.ibb.co/3yp240w/image.png" alt="image" border="0"/>
        </a>
        <h3 className="text-orange">LaboTech</h3>
      </div>

      <div className="">
        <p className="text-white">Bem-Vindo(a) de volta ao <span className="text-orange">LaboTech</span>!</p>
        <p className="text-white">Os <span className="text-orange">LaboInstrutores</span> estavam com saudades</p>
      </div>

      <div className="text-orange">
        <a href="https://imgbb.com/%22%3E">
          <img src="https://i.ibb.co/NCfBmHT/image.png" alt="Aline" border="0" />
        </a>

        <p className="text-white"><span className="text-orange">Aline</span> te dá boas-vindas!</p>
      </div>

      <div className="">
          <h2 className="text-orange">Login</h2>

          <div className="">
            <form className="" action="#" method="POST">

              <section className="text-white border-width: 1px border-color: white border-style: solid">
              <div className="">
                  <input type="email" name="email" value="" placeholder="E-mail" id="email" autoComplete="email"
                  required  className="" />
                </div>

                <div className="">
                  <input type ="password" name="password" value="" placeholder="Senha" id="password" autoComplete="current-password"
                  required className=""/>
                </div>
              </section>

              <div>
                <div className="text-white">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label for="rememberMe">Lembrar de mim</label>
                </div> 

                <div className="">
                    <a href="#" className="text-white underline">Esqueceu a senha?</a>
                  </div>
              </div>

              <div>
                <button type="submit" className="text-orange bg-background">
                  Entrar
                </button>
              </div>
            </form>

            <p className="text-white">Ainda não é membro?
              <a href="#" className="text-orange underline" id="cadastrar">Cadastre-se agora mesmo!</a>
            </p>
          </div>
        </div>
    </section>
    </>
  )
}
