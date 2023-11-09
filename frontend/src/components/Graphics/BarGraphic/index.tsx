import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { api } from "../../../hooks/useApi";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { useContext, useEffect, useState } from "react";

interface IExercises {
  id: string;
  exercise: string;
  status: string;
  time: number;
  level: number;
  created_at: string | number | Date;
}

export function BarGraphic() {
  const auth = useContext(AuthContext);

  const [exercisesCompleted, setExercisesCompleted] = useState<IExercises[]>(
    []
  );

  console.log(exercisesCompleted);

  useEffect(() => {
    const fetchExercisesCompletes = async () => {
      try {
        const response = await api.get(
          `/users/${auth.user?.id}/completed-exercises`,
          {
            headers: {
              Authorization: `Bearer ${auth.user?.token}`,
            },
          }
        );

        setExercisesCompleted(response.data);
      } catch (error) {
        console.error("Erro ao buscar o formulário de anamnese:", error);
      }
    };

    fetchExercisesCompletes();
  }, []);

  let colors: string[] = [];

  exercisesCompleted.forEach((entry) => {
    if (entry.level === 2) {
      colors.push("#00FF00"); // Verde para nível 2
    } else if (entry.level === 4) {
      colors.push("#FFFF00"); // Amarelo para nível 4
    } else {
      colors.push("#FF0000"); // Vermelho para outros níveis
    }
  });

  return (
    <BarChart width={600} height={300} data={exercisesCompleted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="level" fill="#8884d8">
        {exercisesCompleted.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Bar>
    </BarChart>
  );
}
