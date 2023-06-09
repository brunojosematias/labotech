import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Exercises } from "./pages/Exercises";
import { InitExercice } from "./pages/InitExercice";
import { AnamnesisForm } from "./pages/AnamnesisForm";
import { GetBack } from "./pages/ForgotPassword/GetBack";
import { Profile } from "./pages/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/recuperar-senha" element={<ForgotPassword />} />
      <Route path="/exercicios" element={<Exercises />} />
      <Route path="/init-exercicio" element={<InitExercice />} />
      <Route path="/ficha-anamnese" element={<AnamnesisForm />} />
      <Route path="/voltar-login" element={<GetBack />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  );
}
