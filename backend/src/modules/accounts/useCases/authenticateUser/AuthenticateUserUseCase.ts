import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { VerifyEmailAndPassword } from "../errors";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";
import { RefreshTokenRepository } from "../../repositories/implementations/RefreshTokenRepository";
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

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
  refreshToken: any;
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

    // // Gerar o token
    // const token = sign({}, "d64a9d7049d31f6d43e12fb73617070e", {
    //   subject: user.id,
    //   expiresIn: "1d",
    // });
    const generateRefreshTokenProvider = new GenerateTokenProvider();
    const token = await generateRefreshTokenProvider.execute(user.id);

    const refreshTokenRepository = new RefreshTokenRepository();

    await refreshTokenRepository.delete(user.id);

    const generateRefreshToken = new GenerateRefreshToken(
      refreshTokenRepository
    );
    const refreshToken = await generateRefreshToken.execute(user.id);

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
      refreshToken,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
