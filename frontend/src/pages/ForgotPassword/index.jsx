import React from "react";

import arthur from "../../assets/images/arthur.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { Code } from "./forms/Code";
import { NewPassword } from "./forms/NewPassword";

export function ForgotPassword() {
  return (
    <div className="bg-background scroll-smooth md:px-7">
      <div className="container mx-auto h-screen">
        <div className="flex items-center pt-6 pl-6">
          <a href="" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" border="0" />
          </a>
          <img src={logo} alt="Logo" border="0" />
        </div>

        <div className="items-center justify-between block md:flex">
          <div className="text-white">
            <p className="text-center font-extralight pt-6">
              Essa não! Sua conta está perdida?
              <br />
              Tente recuperar agora mesmo!
            </p>
            <img
              src={arthur}
              alt="Arthur esqueceu a senha"
              border="0"
              className="w-11/12 pl-14 md:pl-0"
            />
            <p className="font-medium pt-3 text-center mb-8 md:mb-0 md:pl-36">
              <span className="text-orange">Arthur</span> tomou um susto com sua
              conta se perdendo
            </p>
          </div>

          <NewPassword />
        </div>
      </div>
    </div>
  );
}
