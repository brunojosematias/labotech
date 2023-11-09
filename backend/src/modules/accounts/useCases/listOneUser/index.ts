import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListOneUserUseCase } from "./ListOneUserUseCase";
import { ListOneUserController } from "../../controllers/ListOneUserController";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const listOneUserUseCase = new ListOneUserUseCase(usersRepository);
  const listOneUserController = new ListOneUserController(listOneUserUseCase);

  return listOneUserController.handle(request, response);
};
