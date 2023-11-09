import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../useCases/authenticateUser/AuthenticateUserUseCase";
import { VerifyEmailAndPassword } from "../useCases/errors";

class AuthenticateUserCotroller {
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    try {
      const token = await this.authenticateUserUseCase.execute({
        password,
        email,
      });

      return response.json(token);
    } catch (error) {
      if (error instanceof VerifyEmailAndPassword) {
        return response.status(401).json({ message: error.message });
      }
    }
  }
}

export { AuthenticateUserCotroller };
