import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Navbar } from "../../components/Navbar";
import { Table } from "../../components/Table";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../hooks/useApi";

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

  // const [profession, setProfession] = useState<string>("");
  // const [age, setAge] = useState<number>(0);
  const [anamsesisFormDatas, setAnamsesisFormDatas] =
    useState<IFirstFormValues>();

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
      try {
        const response = await api.get(`/users/${auth.user?.id}/anamnesis`, {
          headers: {
            Authorization: `Bearer ${auth.user?.token}`,
          },
        });
        // setProfession(response.data.profession);
        // setAge(response.data.age);
        setAnamsesisFormDatas(response.data);
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

  async function handleLogout() {
    headers.Authorization = "";
    await auth.signout();
    navigate("/entrar");
  }

  const imgSrc =
    avatarPreview || `http://localhost:3333/avatar/${auth.user?.avatar}`;

  return (
    <>
      <Navbar />

      <div className="bg-background h-full relative">
        <div className="bg-[#80A1C1] h-32"></div>
        <div className="container mx-auto">
          <div className="flex items-center gap-6 absolute top-14">
            <div className="bg-cinza_escuro rounded-full border-background border-8 ">
              <img className="rounded-full w-48 h-48" src={imgSrc} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
              <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Selecionar Imagem
                <input
                  id="avatar"
                  type="file"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </label>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Salvar
              </button>
            </form>

            <div className="mt-16">
              <span className="text-2xl text-white">
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
            <div className="mt-40 flex items-end">
              <div className="flex flex-col p-14 w-[80rem]">
                <h1 className="text-2xl text-orange">Meu Histórico</h1>
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
                      </tr>
                    </thead>
                    <tbody>
                      {questions.map((item) => (
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-12">
                <Button onClick={handleLogout}>Sair da conta</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
