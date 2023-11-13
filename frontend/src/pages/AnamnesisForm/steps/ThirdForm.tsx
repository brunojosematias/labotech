import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { ButtonSubmit } from "../../../components/ButtonSubmit";

interface IStepInitial {
  stepInitial: (value: number) => void;
}

export function ThirdForm({ stepInitial }: IStepInitial) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/dashboard");
  }

  function handleStepInitial() {
    stepInitial(1);
  }

  return (
    <div className="bg-background h-[20rem]">
      <div className="container mx-auto text-center px-96">
        <div className="w-96 mb-5">
          <ButtonSubmit onClick={handleRedirect}>
            Finalizar o cadastro e entrar no LaboTech
          </ButtonSubmit>
        </div>
        <button
          onClick={handleStepInitial}
          className="text-white underline ml-1 hover:text-orange"
        >
          Alterar respostas
        </button>
      </div>
    </div>
  );
}
