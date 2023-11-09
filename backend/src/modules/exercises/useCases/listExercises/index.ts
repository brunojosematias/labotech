import { Request, Response } from "express";

import { ExercisesRepository } from "../../repositories/implementations/ExercisesRepository";
import { ListExercisesUseCase } from "./ListExercisesUseCase";
import { ListExercisesController } from "../../controllers/ListExercisesController";

export default (request: Request, response: Response) => {
  const exercisesRepository = new ExercisesRepository();
  const listExercisesUseCase = new ListExercisesUseCase(exercisesRepository);
  const listExercisesController = new ListExercisesController(
    listExercisesUseCase
  );

  return listExercisesController.handle(request, response);
};
