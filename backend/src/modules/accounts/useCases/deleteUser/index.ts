import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "../../controllers/DeleteUserController";
import { AnamnesisFormRepository } from "../../../anamnesis-form/repositories/implementations/AnamnesisFormRepository";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const deleteUserUseCase = new DeleteUserUseCase(
    usersRepository,
    anamnesisFormRepository
  );
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController.handle(request, response);
};
