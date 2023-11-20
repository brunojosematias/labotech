
import arthur from "../../../assets/images/arthur.svg";

import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export function Code({
  onGoToNewPassword,
}: {
  onGoToNewPassword?: () => void;
}) {
  const handleRenewPassword = () => {
    if (onGoToNewPassword) {
      onGoToNewPassword();
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

      <div className="scroll-smooth pb-7 md:pb-0">
        <h2 className="text-orange font-medium text-3xl text-center mb-16 md:mr-60">
          Esqueceu a senha
        </h2>
        <form
          className="flex flex-col font-extralight text-white px-14 md:px-0 md:pl-0 md:mr-60"
          action="#"
          method="POST"
        >
          <div className="flex gap-2 items-center mb-14">
            <input
              type="text"
              name="rescueCode"
              placeholder="Código de Resgate"
              id="rescueCode"
              pattern="\d{6}"
              required
              className="bg-background border rounded-3xl w-52 py-3 pl-5 focus:outline-none focus:border-orange transition-all"
            />

            <div className="w-48 md:w-44">
              <Button>Verificar</Button>
            </div>
          </div>

          <Button onClick={handleRenewPassword}>Inserir nova senha</Button>
        </form>

        <div className="text-center font-extralight mt-12 md:mr-60">
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