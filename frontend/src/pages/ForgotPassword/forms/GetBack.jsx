import { Button } from '../../../components/Button';

export function GetBack() {
    return(
        <div className='mr-60'>
            <h2 className="text-orange text-center font-medium text-3xl mb-32">Sucesso em alterar a senha!</h2>

            <div className="w-96">
                <Button>
                    <a href="/login">Voltar para o Login</a>
                </Button>
            </div>
        </div>
    )
}