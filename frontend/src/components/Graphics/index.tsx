import { BarGraphic } from "./BarGraphic";
import { PizzaGraphic } from "./PizzaGraphic";

export function Graphics() {
  return (
    <div className="bg-[#29292E]">
      <h1 className="text-2xl text-orange">Meus gráficos de desempenho</h1>

      <div className="flex items-center justify-around">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-3 text-white">
            <span>Bom</span>
            <span>Médio</span>
            <span>Ruim</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-7 h-7 bg-green-500"></div>
            <div className="w-7 h-7 bg-yellow-500"></div>
            <div className="w-7 h-7 bg-red-500"></div>
          </div>
        </div>
        <div>
          <PizzaGraphic />
        </div>

        <div>
          <BarGraphic />
        </div>
      </div>
    </div>
  );
}
