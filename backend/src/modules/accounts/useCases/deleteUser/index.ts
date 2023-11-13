import { Request, Response } from "express";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserController } from "../../controllers/DeleteUserController";
import { AnamnesisFormRepository } from "../../../anamnesis-form/repositories/implementations/AnamnesisFormRepository";
import { RefreshTokenRepository } from "../../repositories/implementations/RefreshTokenRepository";
import { CompletedExercisesRepository } from "../../../completed-exercises/repositories/implementations/CompletedExercisesRepository";

export default (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const refreshTokenRepository = new RefreshTokenRepository();
  const completedExercisesRepository = new CompletedExercisesRepository();
  const deleteUserUseCase = new DeleteUserUseCase(
    usersRepository,
    anamnesisFormRepository,
    refreshTokenRepository,
    completedExercisesRepository
  );
  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController.handle(request, response);
};
