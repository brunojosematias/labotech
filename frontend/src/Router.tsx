import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Exercises } from "./pages/Exercises";
import { AnamnesisForm } from "./pages/AnamnesisForm";
import { Profile } from "./pages/Profile";
import { Dashboard } from "./pages/Dashboard";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { InitExercice } from "./pages/InitExercice";
import { NewPassword } from "./pages/ForgotPassword/forms/NewPassword";
import { SendEmail } from "./pages/ForgotPassword/forms/SendEmail";
import { Code } from "./pages/ForgotPassword/forms/Code"
import { Success } from "./components/SuccessPage";
import { ForgotPassword } from "./pages/ForgotPassword";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entrar" element={<Login />} />
      <Route path="/code" element={<Code />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/recuperar-senha" element={<ForgotPassword />}>
        <Route path="code" element={<Code />} />
        <Route path="new-password" element={<NewPassword />} />
        <Route path="send-password" element={<SendEmail />} />
        <Route
          path="success"
          element={
            <Success
              title="Sucesso em alterar a senha!"
              text="Eba! Você conseguiu recuperar sua conta!"
              titleButton="Voltar para o Login"
            />
          }
        />
      </Route>

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
