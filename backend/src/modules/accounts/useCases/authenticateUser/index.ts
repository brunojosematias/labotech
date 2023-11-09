import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserCotroller } from "../../controllers/AuthenticateUserController";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
  const authenticateUserController = new AuthenticateUserCotroller(
    authenticateUserUseCase
  );

  return authenticateUserController.handle(request, response);
};
