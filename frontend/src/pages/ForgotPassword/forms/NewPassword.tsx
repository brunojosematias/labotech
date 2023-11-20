
import arthur from "../../../assets/images/arthur.svg";

import { Button } from "../../../components/Button";

export function NewPassword({ onGoToSuccess }: { onGoToSuccess?: () => void }) {
  const handleGoToSuccess = () => {
    if (onGoToSuccess) {
      onGoToSuccess();
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
        <div className="text-center md:pr-60">
          <h2 className="text-orange font-medium text-3xl mb-10">
            Esqueceu a senha
          </h2>
          <div className="font-medium mb-8">
          <p className="text-orange text-2xl mb-3">Sucesso!</p>
          <p className="text-white"> 
            Código confirmado!
            <br />
            Agora, redefina sua senha.
          </p>
          </div>
        </div>

        <form
          className="flex flex-col font-extralight text-white px-9 md:px-0 md:mr-60"
          action="#"
          method="POST"
        >
          <input
            type="password"
            name="password"
            placeholder="Insira sua nova senha"
            id="password"
            autoComplete="current-password"
            required
            className="bg-background border rounded-3xl mb-6 py-3 pl-8 pr-2 md:w-96 focus:outline-none focus:border-orange transition-all"
          />

          <input
            type="password"
            name="password"
            placeholder="Confirme sua nova senha"
            autoComplete="current-password"
            required
            className="bg-background border rounded-3xl mb-10 py-3 pl-8 pr-2 md:w-96 focus:outline-none focus:border-orange transition-all"
          />

          <Button onClick={handleGoToSuccess}>Renovar senha</Button>
        </form>

        <div className="text-center font-extralight mt-8 md:mr-60">
          <p className="text-white">
            Ainda com problemas para recuperar sua conta?
          </p>
          <a
            href="#"
            className="text-orange underline ml-1 hover:text-white"
            id="cadastrar"
          >
            Entre em contato com o suporte aqui.
          </a>
        </div>
      </div>
    </div>
  );
}
