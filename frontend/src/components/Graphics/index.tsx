import { BarGraphic } from "./BarGraphic";
import { PizzaGraphic } from "./PizzaGraphic";

export function Graphics() {
  return (
    <div className="bg-background">
      <div className="flex items-center justify-around">
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
