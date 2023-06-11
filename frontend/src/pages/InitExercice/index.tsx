import { Timer } from "../../components/Timer";
import { ButtonSubmit } from "../../components/ButtonSubmit";
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

  // =====================================================================

  // ======================================================================

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
    exercises.forEach((element) => {
      const level = Number(anamsesisFormDatas?.napeNeck);

      if (
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

  function handleStart() {
    setIsRunning(true);
  }

  function changeImage() {
    if (indexExerciseCompleted + 1 >= exercisesCompleted.length) {
      navigate("/dashboard"); // Navegar para a próxima página
    } else {
      setIndexExerciseCompleted((prevIndex) => prevIndex + 1);
      setImageChangeTime(40); // Definir o tempo de mudança para a próxima imagem (40 segundos)
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

  // ================================================================u

  // ================================================================

  return (
    <div className=" min-800 mx-w-full">
      <div className="bg-background h-full justify-center items-center">
        <Navbar />
        <div className="border-b-[1px] bg-cinza_escuro mx-20 opacity-25"></div>

        <div className="container mx-auto flex gap-40 items-center justify-between">
          <div className="bg-cinza_claro h-[640px] w-[864px] flex justify-center items-center">
            <img
              className="w-[30rem] h-[30rem] "
              src={`http://localhost:3333/exercises/${exercisesCompleted[indexExerciseCompleted]?.demonstration}`}
              alt=""
            />
          </div>

          <div className="bg-background">
            <h1 className="text-orange font-medium text-3xl mb-11 mt-52 break-words">
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

            <div className="ml-4">
              <div className="text-orange flex font-medium text-3xl pt-28 text-center">
                {exercisesCompleted[indexExerciseCompleted + 1] &&
                  "Próximo exercício:"}
              </div>
              <h2 className="flex text-white text-3xl pt-6 break-words">
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

            <div className="mt-44 pb-14 flex flex-col gap-5 justify-end items-end">
              <div className="text-white pt-2 text-2xl">Tudo pronto?</div>

              <div className="w-36">
                <Button onClick={handleStart}>Começar</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
