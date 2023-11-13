import { Request, Response } from "express";
import { ExercisesRepository } from "../../repositories/implementations/ExercisesRepository";
import { DeleteExerciseUseCase } from "./DeleteExerciseUseCase";
import { DeleteExerciseController } from "../../controllers/DeleteExerciseController";

export default (request: Request, response: Response) => {
  const exerciseRepository = new ExercisesRepository();
  const deleteExerciseUseCase = new DeleteExerciseUseCase(exerciseRepository);
  const deleteExerciseController = new DeleteExerciseController(
    deleteExerciseUseCase
  );

  return deleteExerciseController.handle(request, response);
};
