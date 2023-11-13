import { Request, Response } from "express";
import { CompletedExercisesRepository } from "../../repositories/implementations/CompletedExercisesRepository";
import { ListCompletedExercisesUseCase } from "./ListCompletedExercisesUseCase";
import { ListCompletedExerciseController } from "../../controllers/ListCompletedExercisesController";

export default (request: Request, response: Response) => {
  const completedExercisesRepository = new CompletedExercisesRepository();
  const listCompletedExercises = new ListCompletedExercisesUseCase(
    completedExercisesRepository
  );
  const listCompletedExerciseController = new ListCompletedExerciseController(
    listCompletedExercises
  );

  return listCompletedExerciseController.handle(request, response);
};
