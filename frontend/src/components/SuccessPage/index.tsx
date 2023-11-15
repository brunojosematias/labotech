import lucas from "../../assets/images/lucas-cake.svg";

import { Button } from "../Button";
import { Link } from "react-router-dom";

interface SuccessProps {
  title: React.ReactNode;
  text: string;
  titleButton: React.ReactNode;
}

export function Success({ text, title, titleButton }: SuccessProps) {
  return (
    <div className="scroll-smooth">
      <div className="mx-auto">
        <div className="items-center justify-around block mt-14 md:flex">
          <div className="text-white">
            <p className="text-center font-extralight md:pt-6">{text}</p>
            <img
              src={lucas}
              alt="Lucas e seu bolo"
              className="ml-20 w-80 border-0 md:w-11/12 md:ml-0"
            />
            <p className="font-medium pt-3 text-center mb-24 md:mb-0 md:pl-36">
              <span className="text-orange">Lucas</span> fez um bolo para
              comemorar esta ocasião
            </p>
          </div>

          <div className="flex-col text-center">
            <h2 className="text-orange font-medium text-3xl mb-12 md:mb-32">
              {title}
            </h2>

            <div className="px-10 md:px-0 md:w-96">
              <Button>
                <Link to="/entrar">{titleButton}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
