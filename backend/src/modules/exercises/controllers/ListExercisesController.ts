import { Request, Response } from "express";

import { ListExercisesUseCase } from "../useCases/listExercises/ListExercisesUseCase";

class ListExercisesController {
  constructor(private listExercises: ListExercisesUseCase) {}

  async handle(request: Request, response: Response) {
    const exercises = await this.listExercises.execute();

    return response.json(exercises);
  }
}

export { ListExercisesController };
