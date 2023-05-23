import { Button } from "../../../components/Button";

export function GetBack() {
  return (
    <div className="bg-background pb-7 md:pb-0 md:mr-60 px-9 md:px-0">
      <h2 className="text-orange text-center font-medium text-3xl mb-16 md:mb-32">
        Sucesso em alterar a senha!
      </h2>

      <div className="md:w-96">
        <Button>
          <a href="/login">Voltar para o Login</a>
        </Button>
      </div>
    </div>
  );
}
