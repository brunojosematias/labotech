import { Button } from "../../../../components/Button";

export function FirstForm() {
  return (
    <div>
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
          className="bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          id="password"
          autoComplete="current-password"
          required
          className="bg-background border rounded-3xl mb-4 py-3 pl-8 pr-2 focus:outline-none focus:border-orange transition-all"
        />

        <div className="mt-5 mb-8">
          <Button>Entrar</Button>
        </div>
      </form>
    </div>
  );
}
