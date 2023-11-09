import { Request, Response, response } from "express";

import { CreateCompletedExercisesUseCase } from "../useCases/createCompletedExercises/CreateCompletedExercisesUseCase";

class CreateCompletedExercisesController {
  constructor(
    private createCompletedExercisesUseCase: CreateCompletedExercisesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { exercise, status, level, time } = request.body;

    const createCompleteddExercise =
      await this.createCompletedExercisesUseCase.execute(userId, {
        exercise,
        status,
        level,
        time,
      });

    return response.json(createCompleteddExercise);
  }
}

export { CreateCompletedExercisesController };
