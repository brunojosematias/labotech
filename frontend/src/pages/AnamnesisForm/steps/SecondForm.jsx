export function SecondForm() {
  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="block text-center">
          <p className="text-white font-bold mb-3">Nuca/Pescoço</p>
          <div className="flex justify-between items-center font-extralight text-white md:px-72">
            <div className="relative">
              <span className="absolute bottom-[10px] right-[41px] cursor-pointer">
                0
              </span>
              <label htmlFor="" id="nenhuma-dor" className="text-white">
                nenhuma dor
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[25px] cursor-pointer">
                1
              </span>
              <label htmlFor="" id="nenhuma-dor" className="text-white">
                dor leve
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[30px] cursor-pointer">
                2
              </span>
              <label htmlFor="" id="nenhuma-dor" className="text-white">
                pouca dor
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[44px] cursor-pointer">
                3
              </span>
              <label htmlFor="" id="nenhuma-dor" className="text-white">
                dor moderada
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[35px] cursor-pointer">
                4
              </span>
              <label
                htmlFor=""
                id="nenhuma-dor"
                className="text-white items-center"
              >
                dor elevada
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[29px] cursor-pointer">
                5
              </span>
              <label
                htmlFor=""
                id="nenhuma-dor"
                className="text-white items-center"
              >
                muita dor
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute bottom-[10px] right-[50.5px] cursor-pointer">
                6
              </span>
              <label
                htmlFor=""
                id="nenhuma-dor"
                className="text-white items-center"
              >
                dor insuportável
              </label>
              <div className="text-white items-center mt-2">
                <input
                  type="checkbox"
                  value="0"
                  className="appearance-none rounded-full w-7 h-7 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  cursor-pointer
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
