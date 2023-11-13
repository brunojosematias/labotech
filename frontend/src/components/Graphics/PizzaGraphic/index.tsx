import { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { api } from "../../../hooks/useApi";
import { AuthContext } from "../../../contexts/Auth/AuthContext";

interface IExercises {
  id: string;
  exercise: string;
  status: string;
  time: number;
  level: number;
  created_at: string | number | Date;
}

export function PizzaGraphic() {
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

  exercisesCompleted.forEach((exercise) => {
    if (exercise.level === 1 || exercise.level === 2) {
      colors.push("#00FF00"); // Verde para nível "Bom"
    } else if (exercise.level === 3 || exercise.level === 4) {
      colors.push("#FFFF00"); // Amarelo para nível "Médio"
    } else if (exercise.level === 5 || exercise.level === 6) {
      colors.push("#FF0000"); // Vermelho para nível "Ruim"
    }
  });

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={exercisesCompleted}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        dataKey="level"
        label={renderCustomizedLabel}
      >
        {exercisesCompleted.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
