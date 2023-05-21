import { Button } from "../../../components/Button";

export function Code() {
  return(
    <div>
      <h2 className="text-orange font-medium text-3xl text-center pr-60 mb-16">Esqueceu a senha</h2>
        <form className="flex flex-col font-extralight text-orange pr-60" action="#" method="POST">
          <input type="email" name="email" placeholder="E-mail" id="email" autoComplete="email"
            required className="bg-background border rounded-3xl mb-3 py-3 pl-8 w-full focus:outline-none focus:border-orange transition-all"/>

          <div className="flex gap-2 items-center mb-8">
            <input type="text" name="rescueCode" placeholder="Código de Resgate" id="rescueCode" pattern="\d{6}" required className="bg-background border rounded-3xl w-52 py-3 pl-5 focus:outline-none focus:border-orange transition-all"/>

            <div className="w-44">
              <Button>Verificar</Button>
            </div>
          </div>
          
            <Button>Renovar senha</Button>
        </form>

      <div className="text-center font-extralight pr-60 mt-8">
        <p className="text-white">Ainda com problemas para recuperar sua conta?</p>
          <a href="#" className="text-orange underline ml-1 hover:text-white" id="cadastrar">Entre em contato com o suporte aqui.</a>
      </div>

    </div>
  )
}