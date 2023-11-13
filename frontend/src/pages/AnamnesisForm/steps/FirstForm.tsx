import { ChangeEvent } from "react";

interface IFirstFormFunctions {
  setGender: (gender: string) => void;
  setAge: (age: string) => void;
  setHeight: (height: string) => void;
  setWeight: (weight: string) => void;
  setProfession: (profession: string) => void;
  setSittingOrStanding: (sittingOrStanding: string) => void;
  setJointProblems: (jointProblems: string) => void;
  setHealthProblems: (healthProblems: string) => void;
}

interface IFirstFormValues {
  gender: string;
  age: number | string;
  height: number | string;
  weight: number | string;
  profession: string;
  sittingOrStanding: string;
  jointProblems: string;
  healthProblems: string;
}

interface IFirstFormDTO {
  onFirstFormFunctions: IFirstFormFunctions;
  onFirstFormValues: IFirstFormValues;
}

export function FirstForm({
  onFirstFormFunctions,
  onFirstFormValues,
}: IFirstFormDTO) {
  function handleGender(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setGender(event.target.value);
  }

  function handleAge(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setAge(event.target.value.replace(/[^0-9]/g, ""));
  }

  function handleWeight(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setWeight(
      event.target.value.replace(/[^0-9.,]/g, "").replace(",", ".")
    );
  }

  function handleHeight(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setHeight(
      event.target.value.replace(/[^0-9.,]/g, "").replace(",", ".")
    );
  }

  function handleProfission(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setProfession(event.target.value);
  }

  function handleIsCheckedSittingOrStanding(
    event: ChangeEvent<HTMLInputElement>
  ) {
    onFirstFormFunctions.setSittingOrStanding(event.target.value);
  }

  function handleIsCheckedJointProblems(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setJointProblems(event.target.value);
  }

  function handleIsCheckedHealthProblems(event: ChangeEvent<HTMLInputElement>) {
    onFirstFormFunctions.setHealthProblems(event.target.value);
  }

  return (
    <div className="bg-background pb-7">
      <div>
        <div className="flex flex-col font-medium text-white md:px-72">
          <div className="mx-16 flex gap-8 mb-3">
            <input
              type="text"
              name="idade"
              placeholder="Idade"
              id="idade"
              required
              value={onFirstFormValues.age}
              onChange={handleAge}
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="altura"
              placeholder="Altura"
              id="altura"
              required
              value={onFirstFormValues.height}
              onChange={handleHeight}
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="peso"
              placeholder="Peso"
              id="peso"
              required
              value={onFirstFormValues.weight}
              onChange={handleWeight}
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="genero"
              placeholder="Gênero"
              id="genero"
              required
              value={onFirstFormValues.gender}
              onChange={handleGender}
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />
          </div>

          <input
            type="text"
            name="profissão"
            placeholder="Profissão"
            id="profissao"
            required
            value={onFirstFormValues.profession}
            onChange={handleProfission}
            className="bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
          />

          <div className="text-white font-medium mb-10">
            <p className="mb-4 ml-24">
              Você passa mais tempo em pé ou sentado?
            </p>
            <div className="flex justify-center mb-10">
              <div className="flex items-center">
                <label htmlFor="seated" className="mt-1">
                  Sentado
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="seated"
                    value="sentado"
                    checked={onFirstFormValues.sittingOrStanding === "sentado"}
                    onChange={handleIsCheckedSittingOrStanding}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="standing" className="ml-60 mt-1">
                  Em pé
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="standing"
                    value="em-pé"
                    checked={onFirstFormValues.sittingOrStanding === "em-pé"}
                    onChange={handleIsCheckedSittingOrStanding}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="seated-standing" className="ml-56 mt-1">
                  Ambos
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="seated-standing"
                    value="ambos"
                    checked={onFirstFormValues.sittingOrStanding === "ambos"}
                    onChange={handleIsCheckedSittingOrStanding}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="mb-4 ml-24">Possui problemas nas articulações?</p>
            <div className="flex justify-center mb-10">
              <div className="flex items-center">
                <label htmlFor="pulse" className="mt-1">
                  No pulso
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="pulse"
                    value="pulso"
                    checked={onFirstFormValues.jointProblems === "pulso"}
                    onChange={handleIsCheckedJointProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="knee" className="ml-52 mt-1">
                  No joelho
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="knee"
                    value="joelho"
                    checked={onFirstFormValues.jointProblems === "joelho"}
                    onChange={handleIsCheckedJointProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="humerus-ulnar" className="ml-40 mt-1">
                  No úlmero-ulnar
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    id="humerus-ulnar"
                    value="úlmero-ulnar"
                    checked={onFirstFormValues.jointProblems === "úlmero-ulnar"}
                    onChange={handleIsCheckedJointProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="mb-4 ml-24">
              Nos conte mais sobre você, você por acaso é:
            </p>
            <div className="flex justify-center items-center">
              <div className="flex items-center">
                <label htmlFor="smoker" className="mt-1">
                  Fumante?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    id="smoker"
                    value="fumante"
                    checked={onFirstFormValues.healthProblems === "fumante"}
                    onChange={handleIsCheckedHealthProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center ml-2">
                <label htmlFor="diabetic" className="ml-52 mt-1">
                  Diabético?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    id="diabetic"
                    value="diabético"
                    checked={onFirstFormValues.healthProblems === "diabético"}
                    onChange={handleIsCheckedHealthProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center ml-1">
                <label htmlFor="asthmatic" className="ml-52 mt-1">
                  Asmático?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    id="asthmatic"
                    value="asmático"
                    checked={onFirstFormValues.healthProblems === "asmático"}
                    onChange={handleIsCheckedHealthProblems}
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
