interface IStepperProps {
  numberOfSteps: number;
}

export function Stepper({ numberOfSteps }: IStepperProps) {
  return (
    <>
      <div className="flex items-center text-4xl font-bold text-white">
        <div className="w-24 h-24 border-none rounded-full bg-orange flex justify-center items-center">
          1
        </div>
        {numberOfSteps === 2 || numberOfSteps > 1 ? (
          <>
            <div className="w-56 h-1 bg-cinza_escuro">
              <div className="w-56 h-1 bg-orange transition-all duration-700"></div>
            </div>
            <div className="w-24 h-24 border-none rounded-full bg-orange flex justify-center items-center transition-colors duration-1000">
              2
            </div>
          </>
        ) : (
          <>
            <div className="w-56 h-1 bg-cinza_escuro ">
              <div className="w-0 h-1"></div>
            </div>
            <div className="w-24 h-24 border-none rounded-full bg-cinza_escuro flex justify-center items-center">
              2
            </div>
          </>
        )}

        {numberOfSteps === 3 ? (
          <>
            <div className="w-56 h-1 bg-cinza_escuro">
              <div className="w-56 h-1 bg-orange transition-all duration-700"></div>
            </div>
            <div className="w-24 h-24 border-none rounded-full bg-orange flex justify-center items-center transition-colors duration-1000">
              3
            </div>
          </>
        ) : (
          <>
            <div className="w-56 h-1 bg-cinza_escuro">
              <div className="w-0 h-1"></div>
            </div>
            <div className="w-24 h-24 border-none rounded-full bg-cinza_escuro flex justify-center items-center">
              3
            </div>
          </>
        )}
      </div>
    </>
  );
}
