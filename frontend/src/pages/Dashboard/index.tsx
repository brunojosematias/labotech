import { useContext, useEffect, useState } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Graphics } from "../../components/Graphics";
import { Navbar } from "../../components/Navbar";

import { api } from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import { CircleNotch } from "@phosphor-icons/react";

interface IExercises {
  id: string;
  exercise: string;
  status: string;
  time: number;
  level: number;
  created_at: string | number | Date;
}

export function Dashboard() {
  const auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [exercisesCompleted, setExercisesCompleted] = useState<IExercises[]>(
    []
  );

  useEffect(() => {
    async function fetchExercisesCompletes() {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/users/${auth.user?.id}/completed-exercises`,
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        );

        setTimeout(() => {
          setIsLoading(false);
          setExercisesCompleted(response.data);
        }, 1000);
      } catch (error) {
        console.error("Erro ao buscar o formulário de anamnese:", error);
      }
    }

    fetchExercisesCompletes();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-background">
        <CircleNotch className="w-14 h-14 text-orange animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div
        className={`container mx-auto ${
          exercisesCompleted.length === 0 ? "h-screen" : "h-full"
        } pb-6`}
      >
        <div className="border-b-[1px] border-b-[#36383D]">
          <Navbar />
        </div>

        <div className="flex items-start">
          <main className="flex-1 flex flex-col p-14">
            <h1 className="text-2xl text-orange">Meu Histórico</h1>
            <div className="flex-1 overflow-auto mt-8">
              <table className="w-full border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                      Exercícios
                    </th>
                    <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                      Duração
                    </th>

                    <>
                      <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                        Início
                      </th>
                      <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                        Status
                      </th>
                    </>
                  </tr>
                </thead>
                <tbody>
                  {exercisesCompleted.map((item) => (
                    <tr key={item.id} className="text-white bg-cinza_escuro">
                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                        {item.exercise}
                      </td>
                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                        {item.time >= 60
                          ? `${Math.floor(item.time / 60)} minutos`
                          : `${item.time} segundos`}
                      </td>

                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                        {item.created_at &&
                          formatDistanceToNow(new Date(item.created_at), {
                            addSuffix: true,
                            locale: ptBR,
                          }).replace(/^./, (match) => match.toUpperCase())}
                      </td>
                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                        <span
                          className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full ${
                            item.status === "Bom" && "before:bg-green-500"
                          } ${
                            item.status === "Médio" && "before:bg-yellow-500"
                          } ${item.status === "Ruim" && "before:bg-red-500"}`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
        {exercisesCompleted.length !== 0 && (
          <div className="bg-[#29292E] px-20 py-4">
            <Graphics />
          </div>
        )}
      </div>
    </div>
  );
}
