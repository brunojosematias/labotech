import { Request, Response } from "express";

import { RefreshTokenUserUseCase } from "../useCases/refreshTokenUser/RefreshTokenUserUseCase";
import { ValidateRefreshToken } from "../useCases/errors";

class RefreshTokenUserController {
  constructor(private refreshTokenUserUseCase: RefreshTokenUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    try {
      const token = await this.refreshTokenUserUseCase.execute(refresh_token);

      return response.json(token);
    } catch (error) {
      if (error instanceof ValidateRefreshToken) {
        return response.status(400).json({ message: error.message });
      }
    }
  }
}

export { RefreshTokenUserController };
