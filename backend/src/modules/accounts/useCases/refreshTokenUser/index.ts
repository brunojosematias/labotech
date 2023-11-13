import { Request, Response } from "express";
import { RefreshTokenRepository } from "../../repositories/implementations/RefreshTokenRepository";
import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase";
import { RefreshTokenUserController } from "../../controllers/RefreshTokenUserController";

export default (request: Request, response: Response) => {
  const refreshTokenRepository = new RefreshTokenRepository();
  const refreshTokenUserUseCase = new RefreshTokenUserUseCase(
    refreshTokenRepository
  );
  const refreshTokenUserController = new RefreshTokenUserController(
    refreshTokenUserUseCase
  );

  return refreshTokenUserController.handle(request, response);
};
