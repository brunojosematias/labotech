import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "../../controllers/CreateUserController";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController.handle(request, response);
};
