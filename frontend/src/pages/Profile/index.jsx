import { Navbar } from "../../components/Navbar";
import { Table } from "../../components/Table";


export function Profile() {
  return (
    <>
      <Navbar />

      <div className="bg-background h-screen relative">
        <div className="bg-[#80A1C1] h-32"></div>
        <div className="container mx-auto">
          <div className="flex items-center gap-6 absolute top-14">
            <div className="bg-cinza_escuro rounded-full w-40 h-40 border-background border-4 ml-3">
              <img src="" alt="" />
            </div>

            <div className="mt-16">
              <span className="text-2xl text-white">Nome Sobrenome</span>
              <span className="text-lg block text-[#AAAAAA]">Profissão</span>
            </div>

            <span className="text-lg text-[#AAAAAA] mt-6">x anos</span>
          </div>

          <div className="mt-40 bg-background">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
