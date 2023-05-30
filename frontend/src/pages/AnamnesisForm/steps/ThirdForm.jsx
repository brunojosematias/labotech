import React from "react";

import { ButtonSubmit } from "../../../components/ButtonSubmit";

export function ThirdForm() {
  return (
    <div className="bg-background">
      <div className="container mx-auto text-center px-96">
        <div className="ml-56 w-80 mb-5">
          <ButtonSubmit>Finalizar o cadastro e entrar no LaboTech</ButtonSubmit>
        </div>
        <a
          href="#"
          className="text-white underline ml-1 hover:text-orange"
          id="cadastrar"
        >
          Alterar respostas
        </a>
      </div>
    </div>
  );
}
