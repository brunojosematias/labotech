
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import aline from "../../assets/images/aline.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Button } from "../../components/Button";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CircleNotch } from "@phosphor-icons/react";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o loading

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email && password) {
      setIsLoading(true);

      const isLogged = await auth.signin(email, password);

      setIsLoading(false);

      if (isLogged) {
        navigate("/ficha-anamnese");
      } else {
        alert("Dados incorretos!");
      }
    }
  };

  return (
    <div className="bg-background h-screen pb-10 md:px-7">
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-background">
          <CircleNotch className="w-14 h-14 text-orange animate-spin" />
        </div>
      )}
      <div className="container mx-auto">
        <div className="flex items-center pt-6 pl-6">
          <Link to="/" className="mr-3.5 w-10">
            <img src={arrow} alt="Arrow" className="border-0" />
          </Link>
          <img src={logo} alt="Logo" className="border-0" />
        </div>

        <div className="block items-center justify-between md:flex">
          <div className="text-orange pl-1 flex items-center pt-6 md:pt-6 md:block md:pl-16">
            <p className="text-white font-extralight text-center order-2 leading-10">
              Bem-Vindo(a) de volta ao
              <span className="text-orange font-normal">LaboTech</span>!<br />
              Os <span className="text-orange">LaboInstrutores</span> estavam
              com saudades!
            </p>
            <div className="block">
              <img
                src={aline}
                alt="Aline"
                className="text-white w-52 md:w-11/12"
              />
              <p className="text-white font-medium pt-3 pl-10 text-sm md:text-base md:pl-80">
                <span className="text-orange">Aline</span> te dá boas-vindas!
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-orange font-medium text-3xl mb-16 text-right pr-10 md:text-center md:pr-60">
              Login
            </h2>
            <div>
              <form
                onSubmit={handleLogin}
                className="flex flex-col text-white font-medium px-9 md:pl-0 md:pr-60"
                noValidate
              >
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmail}
                  className="bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePassword}
                  className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 focus:outline-none focus:border-orange transition-all"
                />{" "}
                <div className="flex">
                  {
                    <div className="text-white font-extralight flex items-center outline-none">
                      <input
                        type="checkbox"
                        value="lsRememberMe"
                        id="rememberMe"
                        className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                      />
                      <label>Lembrar de mim</label>
                    </div>
                  }

                  <div className="text-white underline font-bold ml-48 md:ml-24 hover:text-orange">
                    <a href="/recuperar-senha">Esqueceu a senha?</a>
                  </div>
                </div>
                <div className="mt-5 mb-8">
                  <Button>Entrar</Button>
                </div>
              </form>

              <div className="font-extralight text-center md:pl-4 md:text-left">
                <p className="text-white">
                  Ainda não é membro?
                  <Link
                    to="/cadastro"
                    className="text-orange underline ml-1 hover:text-white"
                    id="cadastrar"
                  >
                    Cadastre-se agora mesmo!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
