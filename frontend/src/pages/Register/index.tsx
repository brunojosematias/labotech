import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import laboinstrutores from "../../assets/images/labo-instrutores.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import { Button } from "../../components/Button";
import { api } from "../../hooks/useApi";

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await api
      .post("/users", {
        name,
        surname,
        email,
        password,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    navigate("/entrar");
  }

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSurname(event: ChangeEvent<HTMLInputElement>) {
    setSurname(event.target.value);
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
  }

  return (
    <>
      <div className="bg-background h-screen px-7">
        <div className="flex items-center pt-20 pl-6 mb-10 container mx-auto">
          <a href="" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" className="border-0" />
          </a>
          <img src={logo} alt="Logo" className="border-0" />
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex gap-64 ml-36">
            <div>
              <h2 className="text-orange font-medium text-3xl text-center pt-8 mb-16">
                Registrar
              </h2>
              <form
                className="font-extralight text-white"
                method="POST"
                onSubmit={handleRegister}
              >
                <div className=" flex font-extralight text-white gap-6 ">
                  <input
                    type="nome"
                    name="nome"
                    placeholder="Nome"
                    id="nome"
                    autoComplete="nome"
                    required
                    value={name}
                    onChange={handleName}
                    className="bg-background border rounded-3xl mb-7 py-3 pl-7 w-48 focus:outline-none focus:border-orange transition-all"
                  />

                  <input
                    type="sobrenome"
                    name="sobrenome"
                    placeholder="Sobrenome"
                    id="sobrenome"
                    autoComplete="sobrenome"
                    required
                    value={surname}
                    onChange={handleSurname}
                    className="bg-background border rounded-3xl mb-7 py-3 pl-8 w-48  focus:outline-none focus:border-orange transition-all"
                  />
                </div>

                <div className="flex  flex-col font-extralight text-white  ">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    id="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleEmail}
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 w-6/11 focus:outline-none focus:border-orange transition-all"
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
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all"
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Confirmar senha"
                    id="password"
                    autoComplete="current-password"
                    required
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all"
                  />

                  <div className="flex flex-col leading-7 ml-5">
                    <div className="flex text-white font-extralight items-center outline-none">
                      <input
                        type="checkbox"
                        value="lsRememberMe"
                        id="rememberMe"
                        className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                      />

                      <a href="#" className="underline hover:text-orange">
                        Li e concordo com os termos de uso do{" "}
                        <span className="text-orange"> LaboTech</span>
                      </a>
                    </div>

                    <div className="text-white font-extralight flex items-center outline-none">
                      <input
                        type="checkbox"
                        value="lsRememberMe"
                        id="rememberMe"
                        className="appearance-none h-4 w-4 border border-spacing-2 rounded-sm mr-2 focus:outline-none checked:bg-orange"
                      />
                      <label htmlFor="rememberMe">
                        Receber as notas de atualização via e-mail{" "}
                      </label>
                    </div>
                  </div>

                  <div className="mt-5 mb-8 w-6/11">
                    <Button>Criar conta</Button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <div className="text-orange">
                <div className=" text-center mb-7">
                  <p className="text-white font-extralight">
                    Primeira vez usando o
                    <span className="text-orange font-normal"> LaboTech</span>?
                    <br />
                    Crie sua conta gratuita agora mesmo!
                  </p>
                </div>
                <div className=" text-center mb-2">
                  <p className="text-white font-extralightpt-3">
                    Nossos <span className="text-orange">Laboinstrutores</span>{" "}
                    te esperam de braços abertos!
                  </p>
                </div>
              </div>

              <img
                src={laboinstrutores}
                alt="LaboInstrutores"
                className="w-11/12"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
