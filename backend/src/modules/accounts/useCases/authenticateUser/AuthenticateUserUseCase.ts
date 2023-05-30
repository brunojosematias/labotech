import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { VerifyEmailAndPassword } from "../errors";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    // Verifica se o usuário existi
    if (!user) {
      throw new VerifyEmailAndPassword();
    }

    const passwordMatch = await compare(password, user.password);

    // verifica se a senha está correta
    if (!passwordMatch) {
      throw new VerifyEmailAndPassword();
    }

    // Gerar o token
    const token = sign({}, "d64a9d7049d31f6d43e12fb73617070e", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
