import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Exercises } from "./pages/Exercises";
import { AnamnesisForm } from "./pages/AnamnesisForm";
import { GetBack } from "./pages/ForgotPassword/GetBack";
import { Table } from "./components/Table";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { InitExercice } from "./pages/InitExercice";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/recuperar-senha" element={<ForgotPassword />} />
      <Route path="/cadastro" element={<Register />} />

      <Route
        path="/ficha-anamnese"
        element={
          <RequireAuth>
            <AnamnesisForm />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/perfil"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/exercicios"
        element={
          <RequireAuth>
            <Exercises />
          </RequireAuth>
        }
      />

      <Route
        path="/iniciar-exercicios"
        element={
          <RequireAuth>
            <InitExercice />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
