import axios from "axios";
import jwt from "jwt-decode";

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAPI = () => ({
  validateToken: async (token: string) => {
    const decode: any = jwt(token);
    const id = decode.sub;

    const response = await api.get(`/users/${id}`);

    console.log(response);

    return {
      user: {
        id: response.data.id,
        name: response.data.name,
        surname: response.data.surname,
        email: response.data.email,
        avatar: response.data.avatar,
        token: token,
      },
    };
  },

  signin: async (email: string, password: string) => {
    const response = await api.post("/sessions", { email, password });

    const userToken = response.data.token;
    const decode: any = jwt(userToken);
    const id = decode.sub;

    const datas = await api.get(`/users/${id}`);

    return {
      user: {
        id: datas.data.id,
        email: response.data.user.email,
        password: response.data.user.password,
        name: datas.data.name,
        surname: datas.data.surname,
        avatar: datas.data.avatar,
        token: userToken,
      },
      token: response.data.token,
    };
  },

  logout: async () => {
    return { status: true };
  },
});
