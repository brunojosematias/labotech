import { Request, Response } from "express";
import { CompletedExercisesRepository } from "../../repositories/implementations/CompletedExercisesRepository";
import { DeleteCompletedExercisesUseCase } from "./DeleteCompletedExercisesUseCase";
import { DeleteAnamnesisFormController } from "../../../anamnesis-form/controllers/DeleteAnamnesisFormController";
import { DeleteCompletedExercisesController } from "../../controllers/DeleteCompletedExercisesController";

export default (request: Request, response: Response) => {
  const completedExercisesRepository = new CompletedExercisesRepository();
  const deleteCompletedExercisesUseCase = new DeleteCompletedExercisesUseCase(
    completedExercisesRepository
  );
  const deleteCompletedExercisesController =
    new DeleteCompletedExercisesController(deleteCompletedExercisesUseCase);

  return deleteCompletedExercisesController.handle(request, response);
};
