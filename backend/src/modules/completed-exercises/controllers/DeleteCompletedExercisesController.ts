import { Request, Response } from "express";

import { DeleteCompletedExercisesUseCase } from "../useCases/deleteCompletedExercises/DeleteCompletedExercisesUseCase";

class DeleteCompletedExercisesController {
  constructor(
    private deleteCompletedExercisesUseCase: DeleteCompletedExercisesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { userId } = request.params;
    await this.deleteCompletedExercisesUseCase.execute(userId);
  }
}

export { DeleteCompletedExercisesController };
