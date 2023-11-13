import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";
import { UpdateUserAvatarController } from "../../controllers/UpdateUserAvatarController";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository);
  const updateUserAvatarController = new UpdateUserAvatarController(
    updateUserAvatarUseCase
  );

  return updateUserAvatarController.handle(request, response);
};
