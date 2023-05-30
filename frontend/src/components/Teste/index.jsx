import { Button } from "../Button";

import play from "../../assets/icons/play.svg";

export function Timer() {
  return (
    <div className="flex">
      <form
        className="flex flex-col items-center gap-8
      "
      >
        <div className="w-full flex items-center justify-center gap-2 text-[#E1E1E6] text-[1.125rem] font-bold flex-wrap">
          <input
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            className="bg-transparent w-16 h-9 border-0 border-b-2 boder-[#7C7C8A] font-bold text-[1.125rem] py-0 px-[0.5rem] text-[#E1E1E6] focus:shadow-none focus:border-orange focus:outline-none placeholder:text-[#7C7C8A] transition-all"
          />
          <span className="text-[1.125rem]">minutos</span>
        </div>
      </form>
    </div>
  );
}
