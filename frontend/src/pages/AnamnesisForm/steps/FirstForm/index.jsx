import { Button } from "../../../../components/Button";

export function FirstForm() {
  return (
    <div>
      <form
        className="flex flex-col font-extralight text-white px-9 md:px-72"
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
          className="bg-background border rounded-3xl mb-7 py-3 pl-8 pr-2 focus:outline-none focus:border-orange transition-all"
        />

        <input
          type="date"
          name="dtnasc"
          placeholder="Data de nascimento"
          id="dtnasc"
          required
          className="bg-background border rounded-3xl mb-7 py-3 pl-8 pr-5 focus:outline-none focus:border-orange transition-all"
        />
      </form>
    </div>
  );
}
