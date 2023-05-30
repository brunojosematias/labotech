const lineTable = [
  {
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
  {
    exercise: "Relaxamento de pescoço",
    duration: "25 minutos",
    start: "Há cerca de 2 meses",
    status: "Mediano",
  },
];

export function Table() {
  return (
    <main className="flex-1 flex flex-col p-14">
      <h1 className="text-2xl text-orange">Meu Histórico</h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                Exercício
              </th>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                Duração
              </th>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                Início
              </th>
              <th className="bg-cinza_claro p-4 text-left text-[#E1E1E6] text-sm leading-6 first:rounded-l-lg first:pl-6 last:rounded-r-lg last:pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {lineTable.map((item) => (
              <tr className="text-white bg-cinza_escuro">
                <td className="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  {item.exercise}
                </td>
                <td claclassName="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  {item.duration}
                </td>
                <td claclassName="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  {item.start}
                </td>
                <td claclassName="border-t-4 border-[#202024] p-4 text-sm leading-6 first:w-1/2 first:pl-6 last:rounded-r-lg pr-6">
                  <span className="flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-green-600">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
