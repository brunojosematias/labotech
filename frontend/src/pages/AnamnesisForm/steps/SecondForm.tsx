import { ChangeEvent, useState } from "react";

interface SecondFormFunctions {
  setNapeNeck: (napeNeck: string) => void;
  setUpperBack: (back: string) => void;
  setLowerBack: (back: string) => void;
  setLegs: (legs: string) => void;
  setKnees: (knees: string) => void;
  setFeetAndAnkles: (feetAndAnkles: string) => void;
}

interface SecondFormValues {
  napeNeck: number | string;
  upperBack: number | string;
  lowerBack: number | string;
  legs: number | string;
  knees: number | string;
  feetAndAnkles: number | string;
}

interface ISecondFormDTO {
  onSecondFormFunctions: SecondFormFunctions;
  onSecondFormValues: SecondFormValues;
}

const napeNeck = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

const upperBack = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

const lowerBack = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

const legs = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

const knees = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

const feetAndAnkles = [
  {
    title: "nenhuma dor",
    level: 0,
  },
  {
    title: "dor leve",
    level: 1,
  },
  {
    title: "pouca dor",
    level: 2,
  },
  {
    title: "dor moderada",
    level: 3,
  },
  {
    title: "dor elevada",
    level: 4,
  },
  {
    title: "muita dor",
    level: 5,
  },
  {
    title: "dor insuportável",
    level: 6,
  },
];

export function SecondForm({
  onSecondFormFunctions,
  onSecondFormValues,
}: ISecondFormDTO) {
  function handleIsCheckedNapeNeck(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setNapeNeck(event.target.value);
  }

  function handleIsCheckedUpperBack(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setUpperBack(event.target.value);
  }

  function handleIsCheckedLowerBack(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setLowerBack(event.target.value);
  }

  function handleIsCheckedLegs(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setLegs(event.target.value);
  }

  function handleIsCheckedKnees(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setKnees(event.target.value);
  }

  function handleIsCheckedFeetAndAnkles(event: ChangeEvent<HTMLInputElement>) {
    onSecondFormFunctions.setFeetAndAnkles(event.target.value);
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center">
          <p className="text-white font-bold mb-3">Nuca/Pescoço</p>
          <div className="flex justify-between gap-11 items-center font-medium text-white md:px-72">
            {napeNeck.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor={item.title} className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    id={item.title}
                    type="checkbox"
                    value={item.level}
                    checked={onSecondFormValues.napeNeck === String(item.level)}
                    onChange={handleIsCheckedNapeNeck}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-bold mb-3">Costas ( superior )</p>
          <div className="flex justify-between items-center gap-11 font-medium text-white md:px-72">
            {upperBack.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor="" className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    type="checkbox"
                    value={item.level}
                    checked={
                      onSecondFormValues.upperBack === String(item.level)
                    }
                    onChange={handleIsCheckedUpperBack}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-bold mb-3">Costas ( inferior )</p>
          <div className="flex justify-between items-center gap-11 font-medium text-white md:px-72">
            {lowerBack.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor="" className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    type="checkbox"
                    value={item.level}
                    checked={
                      onSecondFormValues.lowerBack === String(item.level)
                    }
                    onChange={handleIsCheckedLowerBack}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-bold mb-3">Pernas</p>
          <div className="flex justify-between gap-11 items-center font-medium text-white md:px-72">
            {legs.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor="" className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    type="checkbox"
                    value={item.level}
                    checked={onSecondFormValues.legs === String(item.level)}
                    onChange={handleIsCheckedLegs}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-bold mb-3">Joelhos</p>
          <div className="flex justify-between gap-11 items-center font-medium text-white md:px-72">
            {knees.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor="" className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    type="checkbox"
                    value={item.level}
                    checked={onSecondFormValues.knees === String(item.level)}
                    onChange={handleIsCheckedKnees}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-white font-bold mb-3">Pés e Tornozelos</p>
          <div className="flex justify-between gap-11 items-center font-medium text-white md:px-72">
            {feetAndAnkles.map((item) => (
              <div key={item.level} className="text-center">
                <div className="text-white items-center mt-2">
                  <label htmlFor="" className="text-white">
                    {item.title}
                  </label>
                  <span className="block">{item.level}</span>
                  <input
                    type="checkbox"
                    value={item.level}
                    checked={
                      onSecondFormValues.feetAndAnkles === String(item.level)
                    }
                    onChange={handleIsCheckedFeetAndAnkles}
                    className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
