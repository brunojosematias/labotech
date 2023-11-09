import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";
import { useAPI } from "../../hooks/useApi";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useAPI();

  useEffect(() => {
    async function validateToken() {
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const data = await api.validateToken(storageData);

        if (data.user) {
          setUser(data.user);
        }
      }
    }

    validateToken();
  }, []);

  async function signin(email: string, password: string) {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);

      return true;
    }

    return false;
  }

  async function signout() {
    setUser(null);
    setToken("");
    await api.logout();
  }

  function setToken(token: string) {
    localStorage.setItem("authToken", token);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
