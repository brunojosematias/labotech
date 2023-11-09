import { Request, Response } from "express";
import { ExercisesRepository } from "../../repositories/implementations/ExercisesRepository";
import { AddExerciseUseCase } from "./AddExerciseUseCase";
import { AddExerciseController } from "../../controllers/AddExerciseController";

export default (request: Request, response: Response) => {
  const exercisesRepository = new ExercisesRepository();
  const addExerciseUseCase = new AddExerciseUseCase(exercisesRepository);
  const addExerciseController = new AddExerciseController(addExerciseUseCase);

  return addExerciseController.handle(request, response);
};
