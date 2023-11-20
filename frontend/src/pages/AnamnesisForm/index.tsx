import { FormEvent, useContext, useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Stepper } from "../../components/Stepper";

import { FirstForm } from "./steps/FirstForm";
import { SecondForm } from "./steps/SecondForm";
import { ThirdForm } from "./steps/ThirdForm";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { api } from "../../hooks/useApi";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export function AnamnesisForm() {
  const auth = useContext(AuthContext);

  console.log(auth.user?.id);

  const [steps, setSteps] = useState<number>(1);

  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [profession, setProfession] = useState<string>("");
  const [sittingOrStanding, setSittingOrStanding] = useState<string>("");
  const [jointProblems, setJointProblems] = useState<string>("");
  const [healthProblems, setHealthProblems] = useState<string>("");

  const [napeNeck, setNapeNeck] = useState<string>("");
  const [upperBack, setUpperBack] = useState<number | string>("");
  const [lowerBack, setLowerBack] = useState<number | string>("");
  const [legs, setLegs] = useState<number | string>("");
  const [knees, setKnees] = useState<number | string>("");
  const [feetAndAnkles, setFeetAndAnkles] = useState<number | string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const convertedHeight = Number(height);
    const convertedWeight = Number(weight);
    const convertedAge = Number(age);

    const convertNapeNeck = Number(napeNeck);
    const convertUpperBack = Number(upperBack);
    const convertLowerBack = Number(lowerBack);
    const convertLegs = Number(legs);
    const convertKnees = Number(knees);
    const convertFeetAndAnkles = Number(feetAndAnkles);

    const { data } = await api.get(`/users/${auth.user?.id}/anamnesis`, {
      headers: {
        Authorization: `Bearer ${auth.user?.token}`,
      },
    });

    if (data) {
      await api
        .put(
          `/anamnesis/${data.id}`,
          {
            age: convertedAge,
            gender,
            weight: convertedWeight,
            height: convertedHeight,
            profession,
            sittingOrStanding,
            jointProblems,
            healthProblems,
            napeNeck: convertNapeNeck,
            upperBack: convertUpperBack,
            lowerBack: convertLowerBack,
            legs: convertLegs,
            knees: convertKnees,
            feetAndAnkles: convertFeetAndAnkles,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      await api
        .post(
          `/users/${auth.user?.id}/anamnesis`,
          {
            age: convertedAge,
            gender,
            weight: convertedWeight,
            height: convertedHeight,
            profession,
            sittingOrStanding,
            jointProblems,
            healthProblems,
            napeNeck: convertNapeNeck,
            upperBack: convertUpperBack,
            lowerBack: convertLowerBack,
            legs: convertLegs,
            knees: convertKnees,
            feetAndAnkles: convertFeetAndAnkles,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    setSteps(steps + 1);
  }

  function handleSteps() {
    if (steps < 3) {
      setSteps(steps + 1);
    }
  }

  const forms = [
    <FirstForm
      onFirstFormFunctions={{
        setGender,
        setAge,
        setHeight,
        setWeight,
        setProfession,
        setSittingOrStanding,
        setJointProblems,
        setHealthProblems,
      }}
      onFirstFormValues={{
        gender,
        age,
        height,
        weight,
        profession,
        sittingOrStanding,
        jointProblems,
        healthProblems,
      }}
    />,
    <SecondForm
      onSecondFormFunctions={{
        setNapeNeck,
        setUpperBack,
        setLowerBack,
        setLegs,
        setKnees,
        setFeetAndAnkles,
      }}
      onSecondFormValues={{
        napeNeck,
        upperBack,
        lowerBack,
        legs,
        knees,
        feetAndAnkles,
      }}
    />,
    <ThirdForm stepInitial={setSteps} />,
  ];

  return (
    <div className="bg-background scroll-smooth pb-7 h-full">
      <div className="container mx-auto">
        <div className="px-7">
          <div className="flex items-center pt-6 pl-6">
            {steps === 2 ||
              (steps === 3 && (
                <a href="" className="mr-3.5 w-10">
                  <img src={arrow} alt="Arrow" className="border-0" />
                </a>
              ))}

            <img src={logo} alt="Logo" className="border-0" />
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-14 md:mt-9">
              {steps === 1 && (
                <>
                  <h1 className="text-orange font-bold text-center text-xl md:text-2xl">
                    Ficha de Anamnese
                  </h1>
                  <p className="font-bold text-cinza_branco text-center mt-4">
                    Olá, <span className="text-orange">{auth.user?.name}</span>,
                    bem-vindo(a) à nossa estação de criação de ficha de
                    anamnese!
                  </p>

                  <div className="w-64 mx-auto mt-10">
                    <p className="font-bold text-white text-center mt-4">
                      Criar ou editar sua ficha de anamnesis ou
                    </p>
                    <Link
                      className="text-orange text-lg text-center md:block after:content-[''] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full after:transition-all duration-200"
                      to="/perfil"
                    >
                      Deseja entrar no seu perfil? →
                    </Link>
                  </div>
                </>
              )}
              {steps === 2 && (
                <>
                  <h1 className="text-orange font-bold text-center text-xl md:text-2xl">
                    Ficha de Dor
                  </h1>
                  <p className="font-bold text-cinza_branco text-center mt-4">
                    Aqui perguntaremos{" "}
                    <span className="text-orange">seu nível de dor</span> em
                    alguns lugares do seu corpo, marque o nível de
                    <br /> dor que você sente nesses lugares, a escala vai de{" "}
                    <span className="text-orange">
                      (0) nenhuma dor, até (6) muita dor
                    </span>
                    .<br /> Você retornará para essa página constantemente para
                    atualizar caso tenha tido alguma
                    <br /> mudança de dor, caso a dor tenha se elevado, procure
                    ajuda médica!{" "}
                    <span className="text-orange">
                      NÃO EXAGERE O<br /> NÍVEL DE SUA DOR, SEJA TOTALMENTE
                      HONESTO EM SUAS RESPOSTAS!
                    </span>
                  </p>
                  <div className="w-64 mx-auto mt-10">
                    <p className="font-bold text-white text-center mt-4">
                      Continuar editando sua ficha de anamnesis ou
                    </p>
                    <Link
                      className="text-orange text-lg text-center md:block after:content-[''] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full after:transition-all duration-200"
                      to="/perfil"
                    >
                      Deseja entrar no seu perfil? →
                    </Link>
                  </div>
                </>
              )}
              {steps === 3 && (
                <>
                  <h1 className="text-orange font-bold text-center text-xl md:text-2xl">
                    Finalizar cadastro
                  </h1>
                  <p className="font-bold text-cinza_branco text-center mt-4">
                    Você tem certeza das suas respostas?{" "}
                    <span className="text-orange">
                      Você vai alterar elas com o passar do tempo, para
                      <br /> você acompanhar seu progresso com o nosso app
                    </span>
                    , mas você não poderá mudar
                    <br /> seus dados pessoais
                  </p>
                </>
              )}
            </div>

            <div className="mt-20">
              <Stepper numberOfSteps={steps} />
            </div>
          </div>

          <span className="text-cinza_branco font-bold flex justify-end max-w-6xl mt-3 mb-10 md:ml-20">
            Passo {steps} - 3
          </span>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">{forms[steps - 1]}</div>

            <div className="w-full bg-background flex justify-end">
              <div className="w-28 mr-10">
                {steps === 2 && <ButtonSubmit>Próximo</ButtonSubmit>}
              </div>
            </div>
          </form>
          <div className="w-full bg-background flex justify-end">
            <div className="w-28 mr-10 h-[1.80rem]">
              {steps === 1 && (
                <ButtonSubmit onClick={handleSteps}>Próximo</ButtonSubmit>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
