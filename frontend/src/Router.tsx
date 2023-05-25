import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Exercises } from "./pages/Exercises";
import { AnamnesisForm } from "./pages/AnamnesisForm";
import { Table } from "./components/Table";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/recuperar-senha" element={<ForgotPassword />} />
      <Route path="/exercicios" element={<Exercises />} />
      <Route path="/ficha-anamnese" element={<AnamnesisForm />} />
    </Routes>
  );
}
