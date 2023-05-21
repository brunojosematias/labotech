import { Button } from '../../../components/Button';

export function NewPassword() {
    return(
        <div>      
            <h2 className="text-orange font-medium text-3xl text-center mr-64 mb-16">Esqueceu a senha</h2>
                <form className="flex flex-col font-extralight text-orange mr-64" action="#" method="POST">
                    <input type ="password" name="password" placeholder="Insira sua nova senha" id="password" autoComplete="current-password"
                    required className="bg-background border rounded-3xl mb-6 py-3 pl-8 pr-2 w-96 focus:outline-none focus:border-orange transition-all"/>

                    <input type ="password" name="password" placeholder="Confirme sua nova senha" id="password" autoComplete="current-password"
                    required className="bg-background border rounded-3xl mb-10 py-3 pl-8 pr-2 w-96 focus:outline-none focus:border-orange transition-all"/>
                
                    <Button>Renovar senha</Button>
                </form>

                <div className="text-center font-extralight mt-8 mr-64">
                    <p className="text-white">Ainda com problemas para recuperar sua conta?</p>
                    <a href="#" className="text-orange underline ml-1 hover:text-white" id="cadastrar">Entre em contato com o suporte aqui.</a>
                </div>

            
        </div>

    )
}