import lucas from "../../assets/images/lucas-cake.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function GetBack() {
  return (
    <div className="bg-background scroll-smooth md:px-7">
      <div className="container mx-auto h-screen">
        <div className="flex items-center pt-6 pl-6">
          <a href="" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" className="boder-0" />
          </a>
          <img src={logo} alt="Logo" className="boder-0" />
        </div>

        <div className="items-center justify-around block mt-14 md:flex">
          <div className="text-white">
            <p className="text-center font-extralight md:pt-6">
              Eba! Você conseguiu recuperar sua conta!
            </p>
            <img
              src={lucas}
              alt="Lucas e seu bolo"
              className="ml-20 w-80 boder-0 md:w-11/12 md:ml-0"
            />
            <p className="font-medium pt-3 text-center mb-14 md:mb-0 md:pl-36">
              <span className="text-orange">Lucas</span> fez um bolo para
              comemorar essa ocasião
            </p>
          </div>

          <div className="flex-col text-center">
            <h2 className="text-orange font-medium text-3xl mb-12 md:mb-32">
              Sucesso em alterar a senha!
            </h2>

            <div className="px-10 md:px-0 md:w-96">
              <Button>
                <Link to="/login">Voltar para o Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
