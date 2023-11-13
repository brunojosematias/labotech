import { Request, Response } from "express";

import { ICompletedExercisesDTO } from "../@types/ICompletedExercisesDTO";
import { ListCompletedExercisesUseCase } from "../useCases/listCompletedExercises/ListCompletedExercisesUseCase";

class ListCompletedExerciseController {
  constructor(
    private listCompletedExercisesUseCase: ListCompletedExercisesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const all = await this.listCompletedExercisesUseCase.execute(userId);

    return response.json(all);
  }
}

export { ListCompletedExerciseController };
