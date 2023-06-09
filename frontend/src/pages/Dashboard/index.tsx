import { Button } from "../../components/Button";
import { Graphics } from "../../components/Graphics";
import { Navbar } from "../../components/Navbar";
import { Table } from "../../components/Table";
import { Timer } from "../../components/Timer";

export function Dashboard() {
  return (
    <div className="bg-background h-screen">
      <div className="container mx-auto">
        <div className="border-b-[1px] border-b-[#36383D]">
          <Navbar />
        </div>

        <div className="flex items-center">
          {/* <Table /> */}

          <div>
            <form
              className="flex flex-col items-center gap-8 mb-8
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
            <div className="flex flex-col gap-6">
              <Timer />
              <Button>Começar</Button>
            </div>
          </div>
        </div>
      </div>
      <Graphics />
    </div>
  );
}
