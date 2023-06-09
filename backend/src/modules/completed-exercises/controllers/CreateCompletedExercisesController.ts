import { Request, Response, response } from "express";

import { CreateCompletedExercisesUseCase } from "../useCases/createCompletedExercises/CreateCompletedExercisesUseCase";

class CreateCompletedExercisesController {
  constructor(
    private createCompletedExercisesUseCase: CreateCompletedExercisesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const { exercise, status, timer } = request.body;

    const createCompleteddExercise =
      await this.createCompletedExercisesUseCase.execute(userId, {
        exercise,
        status,
        timer,
      });

    return response.json(createCompleteddExercise);
  }
}

export { CreateCompletedExercisesController };
