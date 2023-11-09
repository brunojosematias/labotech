import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserUSeCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "../../controllers/UpdateUserController";

// Essa função irá ser executadata instanciando as classes ao chamar a rota
export default (request: Request, response: Response) => {
  const usersrepository = new UsersRepository();
  const updateUserUseCase = new UpdateUserUSeCase(usersrepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);

  return updateUserController.handle(request, response);
};
