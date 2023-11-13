import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Code } from "./forms/Code";
import { SendEmail } from "./forms/SendEmail";
import { NewPassword } from "./forms/NewPassword";
import { Success } from "../../components/SuccessPage";

export function ForgotPassword() {
  const [currentScreen, setCurrentScreen] = useState("SendEmail");

  const handleGoToNewPassword = () => {
    setCurrentScreen("newPassword");
  };

  const handleGoToSuccess = () => {
    setCurrentScreen("success");
  };

  const handleGoToSendCode = () => {
    setCurrentScreen("code");
  };

  return (
    <div className="bg-background scroll-smooth">
      <div className="container mx-auto h-screen">
        <div className="flex items-center pt-6 pl-6">
          <Link to="/entrar" className="w-10 mr-3.5">
            <img src={arrow} alt="Arrow" className="border-0" />
          </Link>
          <img src={logo} alt="Logo" className="border-0" />
        </div>

        <div>
          {currentScreen === "SendEmail" && (
            <SendEmail onGoToCode={handleGoToSendCode} />
          )}
          {currentScreen === "code" && (
            <Code onGoToNewPassword={handleGoToNewPassword} />
          )}
          {currentScreen === "newPassword" && (
            <NewPassword onGoToSuccess={handleGoToSuccess} />
          )}
          {currentScreen === "success" && (
            <Success
              text="Eba! Você conseguiu recuperar sua conta!"
              title="Sucesso em alterar a senha!"
              titleButton="Voltar para o Login"
            />
          )}
        </div>
      </div>
    </div>
  );
}
