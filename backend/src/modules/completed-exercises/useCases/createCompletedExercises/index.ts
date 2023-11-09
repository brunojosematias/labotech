import { Request, Response } from "express";
import { CompletedExercisesRepository } from "../../repositories/implementations/CompletedExercisesRepository";
import { CreateCompletedExercisesUseCase } from "./CreateCompletedExercisesUseCase";
import { CreateAnamnesisFormController } from "../../../anamnesis-form/controllers/CreateAnamnesisFormController";
import { CreateCompletedExercisesController } from "../../controllers/CreateCompletedExercisesController";

export default (request: Request, response: Response) => {
  const completedExercisesRepository = new CompletedExercisesRepository();
  const createCompletedExercisesUseCase = new CreateCompletedExercisesUseCase(
    completedExercisesRepository
  );
  const createCompletedExercisesController =
    new CreateCompletedExercisesController(createCompletedExercisesUseCase);

  return createCompletedExercisesController.handle(request, response);
};
