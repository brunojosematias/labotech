import { Button } from "../../../components/Button";

export function NewPassword() {
  return (
    <div className="bg-background scroll-smooth pb-7 md:pb-0">
      <h2 className="text-orange font-medium text-3xl text-center mb-16 md:mr-64">
        Esqueceu a senha
      </h2>
      <form
        className="flex flex-col font-extralight text-white px-9 md:px-0 md:mr-64"
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
          id="password"
          autoComplete="current-password"
          required
          className="bg-background border rounded-3xl mb-10 py-3 pl-8 pr-2 md:w-96 focus:outline-none focus:border-orange transition-all"
        />

        <Button>Renovar senha</Button>
      </form>

      <div className="text-center font-extralight mt-8 md:mr-64">
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
  );
}
