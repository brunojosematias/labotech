
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import laboinstrutores from "../../assets/images/labo-instrutores.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import { Button } from "../../components/Button";
import { api } from "../../hooks/useApi";
import { Success } from "../../components/SuccessPage";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  surname: z.string().nonempty("O sobrenome é obrigatório"),
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória"),
  confirmPassword: z.string().nonempty("A confirmação de senha é obrigatória"),
});

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [success, setSuccess] = useState(false);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const values = {
        name,
        surname,
        email,
        password,
        confirmPassword,
      };

      schema.parse(values);

      await api.post("/users", values);
      navigate("/entrar");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors: Record<string, string> = {};

        error.errors.forEach((err) => {
          if (err.path) {
            validationErrors[err.path[0]] = err.message;
          }
        });

        setErrors(validationErrors);
      } else {
        setSuccess(true);
      }
    }
  }

  function handleName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: "",
    }));
  }

  function handleSurname(event: ChangeEvent<HTMLInputElement>) {
    setSurname(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      surname: "",
    }));
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setEmail(value);
    validateEmail(value);
  }

  function validateEmail(email: string) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValid = emailRegex.test(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? "" : "Insira um email válido",
    }));
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: "",
    }));
  }

  function handleConfirmPassword(event: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: "",
    }));
  }

  return (
    <>
      <div className="bg-background h-screen px-7">
        <div className="flex items-center pt-20 pl-6 mb-10 container mx-auto">
          <Link to="/entrar" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" className="border-0" />
          </Link>
          <img src={logo} alt="Logo" className="border-0" />
        </div>

        {!success ? (
          <div className="flex items-center justify-between">
            <div className="flex gap-64 ml-36">
              <div>
                <h2 className="text-orange font-medium text-3xl text-center pt-8 mb-16">
                  Registrar
                </h2>
                <form onSubmit={handleRegister} noValidate>
                  <div className="mb-7 flex text-white font-medium gap-6 ">
                    <div>
                      <input
                        type="nome"
                        name="nome"
                        placeholder="Nome*"
                        id="nome"
                        autoComplete="nome"
                        required
                        value={name}
                        onChange={handleName}
                        className={`bg-background border rounded-3xl py-3 pl-7 w-48 focus:outline-none focus:border-orange transition-all ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="sobrenome"
                        name="sobrenome"
                        placeholder="Sobrenome*"
                        id="sobrenome"
                        autoComplete="sobrenome"
                        required
                        value={surname}
                        onChange={handleSurname}
                        className={`bg-background border rounded-3xl py-3 pl-8 w-48 focus:outline-none focus:border-orange transition-all ${
                          errors.surname ? "border-red-500" : ""
                        }`}
                      />
                      {errors.surname && (
                        <p className="text-red-500">{errors.surname}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col font-medium text-white  ">
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        id="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleEmail}
                        className={`bg-background border rounded-3xl py-3 pl-8 w-6/11 focus:outline-none focus:border-orange transition-all w-full ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="mb-4 ">
                      <input
                        type="password"
                        name="password"
                        placeholder="Senha*"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={handlePassword}
                        className={`bg-background border rounded-3xl  py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all w-full ${
                          errors.password ? "border-red-500" : ""
                        }`}
                      />
                      {errors.password && (
                        <p className="text-red-500">{errors.password}</p>
                      )}
                    </div>

                    <div className="mb-4">
                      <input
                        type="password"
                        name="password"
                        placeholder="Confirmar senha"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                        className={`bg-background border rounded-3xl py-3 pl-8 pr-2 w-6/11 focus:outline-none focus:border-orange transition-all w-full ${
                          errors.confirmPassword ? " border-red-500" : ""
                        }`}
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500">{errors.confirmPassword}</p>
                      )}
                    </div>

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
                      <span className="text-orange font-normal"> LaboTech</span>
                      ?
                      <br />= Crie sua conta gratuita agora mesmo!
                    </p>
                  </div>
                  <div className=" text-center mb-2">
                    <p className="text-white font-extralightpt-3">
                      Nossos{" "}
                      <span className="text-orange">Laboinstrutores</span> te
                      esperam de braços abertos!
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
        ) : (
          <Success
          title={
            <>
              Sucesso na realização<br />do seu cadastro!
            </>
          }
            text="Eba! Você fez o seu cadastro!"
            titleButton={<Link to="/entrar">Ir para o Login</Link>}
          />
        )}
      </div>
    </>
  );
}

export default Register;

