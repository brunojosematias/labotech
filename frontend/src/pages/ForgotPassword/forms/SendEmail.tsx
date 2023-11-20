
import arthur from "../../../assets/images/arthur.svg";

import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export function SendEmail({
  onGoToCode,
}: {
  onGoToCode?: () => void;
}) {
  const handleSendCode = () => {
    if (onGoToCode) {
      onGoToCode();
    }
  };

  return (
    <div className="flex-col justify-between bg-background items-center md:flex md:flex-row">
      <div className="text-white">
        <p className="text-center font-extralight pt-6">
          Essa não! Sua conta está perdida?
          <br />
          Tente recuperar agora mesmo!
        </p>
        <img
          src={arthur}
          alt="Arthur esqueceu a senha"
          className="w-11/12 pl-14 border-0 md:w-full md:pl-0"
        />
        <p className="font-medium pt-3 text-center mb-8 md:mb-0 md:pl-36">
          <span className="text-orange">Arthur</span> tomou um susto com sua
          conta se perdendo
        </p>
      </div>

      <div className="scroll-smooth  pb-7 md:pb-0">
        <div className="text-center md:pr-60">
          <h2 className="text-orange font-medium text-3xl mb-16 md:mb-10">
            Esqueceu a senha
          </h2>

          <p className="text-white mb-10">
            Recupere sua conta no LaboTech!
            <br />
            <span className="text-orange">
              Informe seu e-mail, assim, <br />
              mandaremos um código de resgate
            </span>
            .
          </p>
        </div>

        <form
          className="flex flex-col font-extralight text-white px-9 md:pl-0 md:pr-60"
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
            className="bg-background border rounded-3xl mb-8 py-3 pl-8 w-full md:w-96 focus:outline-none focus:border-orange transition-all"
          />

          <Button onClick={handleSendCode}>Enviar código</Button>
        </form>

        <div className="text-center font-extralight mt-8 md:pr-60">
          <p className="text-white">
            Ainda com problemas para recuperar sua conta?
          </p>
          <Link
            to="#"
            className="text-orange underline ml-1 hover:text-white"
            id="cadastrar"
          >
            Entre em contato com o suporte aqui.
          </Link>
        </div>
      </div>
    </div>
  );
}
