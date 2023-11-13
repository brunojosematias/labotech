import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersController } from "../../controllers/ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);

  return listUsersController.handle(request, response);
};
