import { Timer } from "../../components/Timer";
import { Navbar } from "../../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

interface IExercises {
  id: string;
  name: string;
  type: string;
  time: number;
  level: number;
  demonstration: string;
}

interface IFirstFormValues {
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

export function InitExercice() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [isRunning, setIsRunning] = useState(false);
  const [exercisesCompleted, setExercisesCompleted] = useState<IExercises[]>(
    []
  );
  const [indexExerciseCompleted, setIndexExerciseCompleted] =
    useState<number>(0);

  const [exercises, setExercises] = useState<IExercises[]>([]);
  const [anamsesisFormDatas, setAnamsesisFormDatas] =
    useState<IFirstFormValues>();

  const [imageChangeTime, setImageChangeTime] = useState(
    exercisesCompleted[indexExerciseCompleted]?.time
  );

  const [cancelExercises, setCancelExercises] = useState<boolean>(true);

  useEffect(() => {
    if (
      exercisesCompleted.length > 0 &&
      indexExerciseCompleted < exercisesCompleted.length
    ) {
      setImageChangeTime(exercisesCompleted[indexExerciseCompleted]?.time);
    }
  }, [exercisesCompleted, indexExerciseCompleted]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [responseExercises, responseAnamnesisForm] = await Promise.all([
          api.get("/exercises"),
          api.get(`/users/${auth.user?.id}/anamnesis`, {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }),
        ]);

        setExercises(responseExercises.data);
        setAnamsesisFormDatas(responseAnamnesisForm.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const postCompletedExercise = async () => {
      if (
        exercisesCompleted.length > 0 &&
        indexExerciseCompleted < exercisesCompleted.length
      ) {
        const exercise = exercisesCompleted[indexExerciseCompleted];

        let status = "";

        if (exercise.level === 1 || exercise.level === 2) {
          status = "Bom";
        } else if (exercise.level === 3 || exercise.level === 4) {
          status = "Médio";
        } else if (exercise.level === 5 || exercise.level === 6) {
          status = "Ruim";
        }

        try {
          await api.post(
            `/users/${auth.user?.id}/completed-exercises`,
            {
              exercise: exercise.name,
              status,
              level: exercise.level,
              time: exercise.time,
            },
            {
              headers: {
                Authorization: `Bearer ${auth.user?.token}`,
              },
            }
          );
        } catch (error) {
          console.error("Erro ao postar os dados:", error);
        }
      }
    };

    postCompletedExercise();
  }, [
    exercisesCompleted,
    indexExerciseCompleted,
    auth.user?.id,
    auth.user?.token,
  ]);

  useEffect(() => {
    const targetExerciseTypes = [
      "nuca_pescoco",
      "costas_superior",
      "costas_inferior",
      "pernas",
      "joelhos",
      "pes_tornozelos",
    ];

    exercises.forEach((element) => {
      const level = getLevelForExerciseType(element.type);
      if (
        targetExerciseTypes.includes(element.type) &&
        Math.floor((element.level - 1) / 2) === Math.floor((level - 1) / 2) &&
        level !== 0
      ) {
        if (
          !exercisesCompleted.some(
            (completedElement) => completedElement.id === element.id
          )
        ) {
          setExercisesCompleted((prevState) => [...prevState, element]);
        }
      }
    });
  }, [exercises, anamsesisFormDatas, exercisesCompleted]);

  // Função para obter o level correto com base no tipo de exercício
  function getLevelForExerciseType(type: any) {
    switch (type) {
      case "nuca_pescoco":
        return Number(anamsesisFormDatas?.napeNeck);
      case "costas_superior":
        return Number(anamsesisFormDatas?.upperBack);
      case "costas_inferior":
        return Number(anamsesisFormDatas?.lowerBack);
      case "pernas":
        return Number(anamsesisFormDatas?.legs);
      case "joelhos":
        return Number(anamsesisFormDatas?.knees);
      case "pes_tornozelos":
        return Number(anamsesisFormDatas?.feetAndAnkles);
      default:
        return 0;
    }
  }

  function handleStart() {
    setCancelExercises(false);
    setIsRunning(true);
  }

  function handleCancelExercises() {
    navigate("/dashboard");
  }

  function changeImage() {
    if (indexExerciseCompleted + 1 >= exercisesCompleted.length) {
      navigate("/dashboard");
    } else {
      setIndexExerciseCompleted((prevIndex) => prevIndex + 1);
      setImageChangeTime(100);
    }
  }

  useEffect(() => {
    let timeoutId: number;

    if (isRunning) {
      timeoutId = window.setTimeout(changeImage, imageChangeTime * 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isRunning, imageChangeTime]);

  return (
    <div className="mx-w-full">
      <div className="bg-background h-full justify-center items-center">
        <Navbar />
        <div className="border-b-[1px] bg-cinza_escuro mx-20 opacity-25"></div>

        <div className="container mx-auto flex flex-col items-center justify-center md:flex md:flex-row md:gap-52 md:items-center md:justify-between">
          <div className="bg-cinza_claro flex justify-center items-center mt-28 h-[400px] w-[500px] rounded-[40px] md:h-[500px] md:w-[1100px] md:mt-0">
            <img
              className="h-96 w-96 md:h-[30rem] md:w-[30rem]"
              src={`http://localhost:3333/exercises/${exercisesCompleted[indexExerciseCompleted]?.demonstration}`}
              alt=""
            />
          </div>

          <div className="w-[720px]">
            <h1 className="text-orange font-bold text-2xl mb-11 mt-52 break-words h-[100px]">
              {exercisesCompleted[indexExerciseCompleted]?.name}
            </h1>
            <div className="flex flex-col justify-center items-center">
              <div>
                <Timer start={isRunning} onChangeImage={setImageChangeTime} />
                <h2 className="font-medium text-white text-2xl pt-4 text-end">
                  minutos
                </h2>
              </div>
            </div>

            <div>
              <h2 className="text-orange flex font-bold text-2xl mt-28">
                {exercisesCompleted[indexExerciseCompleted + 1] &&
                  "Próximo exercício:"}
              </h2>
              <h2 className="flex text-white text-[1.5rem] pt-6 breaks h-[100px]">
                {!exercisesCompleted[indexExerciseCompleted + 1]?.name
                  ? "Último exercício"
                  : exercisesCompleted[indexExerciseCompleted + 1]?.name}
              </h2>
              {exercisesCompleted[indexExerciseCompleted + 1] && (
                <h5 className="text-white flex pt-4">
                  Durante{" "}
                  {exercisesCompleted[indexExerciseCompleted + 1]?.time >= 60
                    ? `${Math.floor(
                        exercisesCompleted[indexExerciseCompleted + 1]?.time /
                          60
                      )} minutos`
                    : `${
                        exercisesCompleted[indexExerciseCompleted + 1]?.time
                      } segundos`}
                </h5>
              )}
            </div>

            <div className="mt-20 pb-8 flex flex-col gap-5 justify-end items-end h-32">
              {cancelExercises && (
                <span className="text-white  text-2xl">Tudo pronto?</span>
              )}

              <div className="w-36">
                {cancelExercises ? (
                  <Button onClick={handleStart}>Começar</Button>
                ) : (
                  <Button onClick={handleCancelExercises}>Cacelar</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
