import { Request, Response } from "express";

import { DeleteExerciseUseCase } from "../useCases/deleteExercise/DeleteExerciseUseCase";

class DeleteExerciseController {
  constructor(private deleteExerciseUseCase: DeleteExerciseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteExerciseUseCase.execute(id);

    return response.sendStatus(204);
  }
}

export { DeleteExerciseController };
