import { FormEvent, useContext, useEffect, useState } from "react";

import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../hooks/useApi";

import { Trash } from "@phosphor-icons/react";

import { CircleNotch, PlusCircle } from "@phosphor-icons/react";

import { PencilSimpleLine } from "@phosphor-icons/react";

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

export function Profile() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState<string>("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [anamsesisFormDatas, setAnamsesisFormDatas] =
    useState<IFirstFormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const questions = [
    {
      id: 1,
      question: "altura?",
      answers: `${anamsesisFormDatas?.height} m`,
    },

    {
      id: 2,
      question: "peso?",
      answers: `${anamsesisFormDatas?.weight} kg`,
    },

    {
      id: 3,
      question: "Você passa mais tempo sentado ou em pé?",
      answers: anamsesisFormDatas?.sittingOrStanding,
    },

    {
      id: 4,
      question: "Possui problemas nas articulações?",
      answers: anamsesisFormDatas?.jointProblems,
    },

    {
      id: 5,
      question: "você por acaso é fumante, diabético ou asmático?",
      answers: anamsesisFormDatas?.healthProblems,
    },

    {
      id: 6,
      question: "Nível da dor na Nuca/Pescoço?",
      answers: `Nível ${anamsesisFormDatas?.napeNeck}`,
    },

    {
      id: 7,
      question: "Nível da dor nas Costas(superior)?",
      answers: `Nível ${anamsesisFormDatas?.upperBack}`,
    },

    {
      id: 8,
      question: "Nível da dor nas Costas(inferior)?",
      answers: `Nível ${anamsesisFormDatas?.lowerBack}`,
    },

    {
      id: 9,
      question: "Nível da dor nas Pernas?",
      answers: `Nível ${anamsesisFormDatas?.legs}`,
    },

    {
      id: 10,
      question: "Nível da dor nos Joelhos?",
      answers: `Nível ${anamsesisFormDatas?.knees}`,
    },

    {
      id: 11,
      question: "Nível da dor nos Pés e Tornozelos?",
      answers: `Nível ${anamsesisFormDatas?.feetAndAnkles}`,
    },
  ];

  const headers = {
    Authorization: `Bearer ${auth.user?.token}`,
    "Content-Type": "multipart/form-data",
  };

  useEffect(() => {
    const fetchAnamnesisForm = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/users/${auth.user?.id}/anamnesis`, {
          headers: {
            Authorization: `Bearer ${auth.user?.token}`,
          },
        });
        // setProfession(response.data.profession);
        // setAge(response.data.age);

        setTimeout(() => {
          setAnamsesisFormDatas(response.data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erro ao buscar o formulário de anamnese:", error);
      }
    };

    fetchAnamnesisForm();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar);

    await api.patch("/users/avatar", formData, {
      headers: headers,
    });

    setEdit(false);
  }

  function handleEdit() {
    setEdit(true);
  }

  async function handleDelele() {
    setIsLoading(true);
    await api.delete(`users/${auth.user?.id}`);
    setIsLoading(false);
    navigate("/entrar");
  }

  const handleAvatarChange = (event: any) => {
    const file = event.target.files?.[0];

    if (file) {
      setAvatar(file);

      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleEditFormAnamnesis() {
    navigate("/ficha-anamnese");
    window.scrollTo(0, 0);
  }

  async function handleLogout() {
    headers.Authorization = "";
    await auth.signout();
    navigate("/entrar");
    window.scrollTo(0, 0);
  }

  const imgSrc =
    avatarPreview || `http://localhost:3333/avatar/${auth.user?.avatar}`;

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-background">
        <CircleNotch className="w-14 h-14 text-orange animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-background h-full relative">
        <div className="bg-[#80A1C1] h-32"></div>

        <form noValidate onSubmit={handleSubmit} className="container mx-auto">
          <div className="mt-6 flex justify-end">
            <div className="w-36 h-20">
              {edit && imgSrc && (
                <ButtonSubmit onClick={handleEdit}>Salvar imagem</ButtonSubmit>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6 absolute top-14">
            <div className="bg-cinza_escuro w-48 h-48 rounded-full border-background border-8 relative">
              {(auth.user?.avatar || avatarPreview) && (
                <img className="rounded-full w-48 h-48" src={imgSrc} alt="" />
              )}

              <>
                <label className="absolute bottom-2 right-0 cursor-pointer">
                  <PlusCircle className="w-10 h-10 text-orange" />
                  <input
                    id="avatar"
                    type="file"
                    onChange={handleAvatarChange}
                    className="hidden"
                    onClick={handleEdit}
                  />
                </label>
              </>
            </div>

            <div className="mt-16">
              <span className="text-2xl text-white">
                <Trash
                  onClick={handleDelele}
                  className="text-red-500 w-8 h-8 p-1 rounded-md hover:bg-white hover:bg-opacity-20 cursor-pointer"
                />
                {auth.user?.name} {auth.user?.surname}
              </span>
              <span className="text-lg block text-[#AAAAAA]">
                {anamsesisFormDatas?.profession}
              </span>
            </div>

            <span className="text-lg text-[#AAAAAA] mt-6">
              {anamsesisFormDatas?.age} anos
            </span>
          </div>

          <div className="flex items-end justify-center  mt-40">
            <div className="flex items-end">
              <div className="flex flex-col p-14 w-[80rem]">
                <h1 className="text-2xl text-orange">Ficha de anamnese</h1>
                <div className="flex-1 overflow-auto mt-8">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr>
                        <th className="bg-orange p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                          Perguntas
                        </th>
                        <th className="bg-orange p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                          Respostas
                        </th>

                        <th className="bg-orange flex justify-end p-4 text-white text-sm leading-6 first:rounded-l-lg w-full last:rounded-r-lg last:pr-6 ">
                          <PencilSimpleLine
                            onClick={handleEditFormAnamnesis}
                            className="w-10 h-10 p-1 rounded-md hover:bg-white hover:bg-opacity-60 hover:text-orange transition-colors duration-200 cursor-pointer"
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {anamsesisFormDatas &&
                        questions.map((item) => (
                          <tr
                            key={item.id}
                            className="text-white bg-cinza_escuro"
                          >
                            <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                              {item.question}
                            </td>
                            <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                              {item.answers === "" ? "Nenhum" : item.answers}
                            </td>

                            <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6"></td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-12">
                <ButtonSubmit onClick={handleLogout}>
                  Sair da conta
                </ButtonSubmit>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
