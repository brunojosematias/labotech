import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { api } from "../../hooks/useApi";

interface IAnamnesisFormValues {
  id: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  profession: string;
  sittingOrStanding: string;
  jointProblems: string;
  healthProblems: string;
  napeNeck: string;
  upperBack: string;
  lowerBack: string;
  legs: string;
  knees: string;
  feetAndAnkles: string;
}

interface IExercises {
  id: string;
  name: string;
  type: string;
  time: number;
  level: number;
  demonstration: string;
}

interface ITimer {
  start?: boolean;
  onChangeImage?: (value: number) => void;
}

export function Timer({ start, onChangeImage }: ITimer) {
  const auth = useContext(AuthContext);

  const [amountOfTime, setAmountOfTime] = useState<number>(0);
  const [time, setTime] = useState(amountOfTime);

  const [exercises, setExercises] = useState<IExercises[]>([]);
  const [anamsesisFormDatas, setAnamsesisFormDatas] =
    useState<IAnamnesisFormValues>();

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const responseExercises = await api.get("/exercises");
        const responseAnamnesisForm = await api.get(
          `/users/${auth.user?.id}/anamnesis`,
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        );

        setExercises(responseExercises.data);
        setAnamsesisFormDatas(responseAnamnesisForm.data);
      } catch (error) {
        console.error("Erro ao buscar o formulário de anamnese:", error);
      }
    };

    fetchExercises();
  }, []);

  useEffect(() => {
    const targetExerciseTypes = [
      "nuca_pescoco",
      "costas_superior",
      "costas_inferior",
      "pernas",
      "joelhos",
      "pes_tornozelos",
    ];

    const amountOfTime = exercises.reduce((totalTime, element) => {
      let level = 0;

      switch (element.type) {
        case "nuca_pescoco":
          level = Number(anamsesisFormDatas?.napeNeck);
          break;
        case "costas_superior":
          level = Number(anamsesisFormDatas?.upperBack);
          break;
        case "costas_inferior":
          level = Number(anamsesisFormDatas?.lowerBack);
          break;
        case "pernas":
          level = Number(anamsesisFormDatas?.legs);
          break;
        case "joelhos":
          level = Number(anamsesisFormDatas?.knees);
          break;
        case "pes_tornozelos":
          level = Number(anamsesisFormDatas?.feetAndAnkles);
          break;
        default:
          level = 0;
          break;
      }

      if (
        targetExerciseTypes.includes(element.type) &&
        Math.floor((element.level - 1) / 2) === Math.floor((level - 1) / 2) &&
        level !== 0
      ) {
        return totalTime + element.time;
      }

      return totalTime;
    }, 0);

    setAmountOfTime(amountOfTime);
  }, [exercises, anamsesisFormDatas]);

  useEffect(() => {
    setTime(amountOfTime);
  }, [amountOfTime]);

  useEffect(() => {
    let intervalId: number;

    if (start) {
      intervalId = window.setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [start]);

  function formatNumber(number: number): string[] {
    const minutes = Math.floor(number / 60);
    const seconds = number % 60;

    const minutesDigits = minutes.toString().padStart(2, "0");
    const secondsDigits = seconds.toString().padStart(2, "0");

    return [minutesDigits, secondsDigits];
  }

  const [minutes, seconds] = formatNumber(time);

  return (
    <div>
      <div className="text-6xl text-[#E1E1E6] flex items-center justify-center gap-3 font-mono">
        {minutes.split("").map((digit, index) => (
          <span
            key={`minute-${index}`}
            className="bg-[#29292E] py-3 px-4 rounded-lg h-full"
          >
            {digit}
          </span>
        ))}
        <div className="text-orange overflow-hidden flex justify-center text-7xl font-extrabold">
          :
        </div>
        {seconds.split("").map((digit, index) => (
          <span
            key={`second-${index}`}
            className="bg-[#29292E] py-3 px-4 rounded-lg h-full"
          >
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}
