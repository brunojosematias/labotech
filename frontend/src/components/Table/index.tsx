const lineTable = [
  {
    id: 1,
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    id: 2,
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    id: 3,
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    id: 4,
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    id: 5,
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
];

interface Questions {
  id: number;
  question: string;
  answers: number | string | undefined;
}

// interface IFirstFormValues {
//   gender: string;
//   age: number;
//   height: number;
//   weight: number;
//   profession: string;
//   sittingOrStanding: string;
//   jointProblems: string;
//   healthProblems: string;
// }

interface ITableDTO {
  titleColumnOne?: string;
  titleColumnTwo?: string;
  questionsColumn: Questions[];
  // answersColumn: IFirstFormValues;
}

export function Table({
  titleColumnOne,
  titleColumnTwo,
  questionsColumn,
}: // answersColumn,
ITableDTO) {
  return (
    <main className="flex-1 flex flex-col p-14">
      <h1 className="text-2xl text-orange">Meu Histórico</h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                {titleColumnOne}
              </th>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                {titleColumnTwo}
              </th>

              {location.pathname !== "/exercicios" ??
                (location.pathname !== "/perfil" && (
                  <>
                    <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                      Início
                    </th>
                    <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                      Status
                    </th>
                  </>
                ))}
            </tr>
          </thead>
          <tbody>
            {questionsColumn.map((item) => (
              <tr key={item.id} className="text-white bg-cinza_escuro">
                <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  {item.question}
                </td>
                <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  {item.answers === "" ? "Nenhum" : item.answers}
                </td>

                {location.pathname !== "/exercicios" ??
                  (location.pathname !== "/perfil" && (
                    <>
                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6"></td>
                      <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                        <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-600"></span>
                      </td>
                    </>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
