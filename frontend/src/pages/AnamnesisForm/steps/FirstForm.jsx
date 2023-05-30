export function FirstForm() {
  return (
    <div className="bg-background scroll-smooth pb-7">
      <div className="container mx-auto">
        <form
          className="flex flex-col font-extralight text-white md:px-72"
          action="#"
          method="POST"
        >
          <div className="ml-16 flex gap-8 mb-3">
            <input
              type="text"
              name="idade"
              placeholder="Idade"
              id="idade"
              required
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="altura"
              placeholder="Altura"
              id="altura"
              required
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="peso"
              placeholder="Peso"
              id="peso"
              required
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />

            <input
              type="text"
              name="genero"
              placeholder="Gênero"
              id="genero"
              required
              className="w-44 bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
            />
          </div>

          <input
            type="text"
            name="profissão"
            placeholder="Profissão"
            id="profissao"
            required
            className="bg-background border rounded-3xl mb-7 py-3 pl-8 focus:outline-none focus:border-orange transition-all"
          />

          <div className="text-white font-extralight mb-10">
            <p className="mb-4">Você passa mais tempo em pé ou sentado?</p>
            <div className="flex mb-10">
              <div className="flex items-center">
                <label htmlFor="" className="mt-1">
                  Sentado
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="" className="ml-60 mt-1">
                  Em pé
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="" className="ml-56 mt-1">
                  Ambos
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="mb-4">Possui problemas nas articulações?</p>
            <div className="flex mb-10">
              <div className="flex items-center">
                <label htmlFor="" className="mt-1">
                  No pulso
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="" className="ml-52 mt-1">
                  No joelho
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="" className="ml-40 mt-1">
                  No úlmero-ulnar
                </label>
                <div className="text-white ml-4 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <p className="mb-4">Nos conte mais sobre você, você por acaso é:</p>
            <div className="flex items-center">
              <div className="flex items-center">
                <label htmlFor="" className="mt-1">
                  Fumante?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center ml-2">
                <label htmlFor="" className="ml-52 mt-1">
                  Diabético?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex items-center ml-1">
                <label htmlFor="" className="ml-52 mt-1">
                  Asmático?
                </label>
                <div className="text-white ml-2 mt-2">
                  <input
                    type="checkbox"
                    value="sentado"
                    className="appearance-none rounded-full w-6 h-6 border-white border-2 focus:outline-none checked:bg-orange cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
