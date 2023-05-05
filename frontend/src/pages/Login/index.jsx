import React from 'react';


export function Login() {
  return (
    <>
      <div className="">
        <p className="">Bem-Vindo(a) de volta ao <span className="">LaboTech</span>!</p>
        <p className="">Os <span>LaboInstrutores</span> estavam com saudades</p>
      </div>

      <div className="">
        <a href="https://imgbb.com/%22%3E">
          <img src="https://i.ibb.co/NCfBmHT/image.png" alt="Aline" border="0" />
        </a>

        <p className=""><span>Aline</span> te dá boas-vindas!</p>
      </div>

      <div className="">
          <h2 className="">Login</h2>

          <div className="">
            <form className="" action="#" method="POST">
              <div>
                <div className="">
                  <input type="email" name="email" value="" placeholder="E-mail" id="email" autoComplete="email"
                  required  className="" />
                </div>
              </div>

              <div>
                <div className="">
                </div>
                <div className="">
                  <input type ="password" name="password" value="" placeholder="Senha" id="password" autoComplete="current-password"
                  required  className=""/>
                </div>

                <div className="">
                    <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label for="rememberMe">Lembrar de mim</label>
                </div> 

                <div className="">
                    <a href="#" className="">Esqueceu a senha?</a>
                  </div>
              </div>

              <div>
                <button type="submit"className="">
                  Entrar
                </button>
              </div>
            </form>

            <p className="">Ainda não é membro?
              <a href="#" className="" id="cadastrar">Cadastre-se agora mesmo!</a>
            </p>
          </div>
        </div>
    </>
  )
}
