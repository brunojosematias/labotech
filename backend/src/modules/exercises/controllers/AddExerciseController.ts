import { Request, Response } from "express";

import { AddExerciseUseCase } from "../useCases/addExercise/AddExerciseUseCase";

class AddExerciseController {
  constructor(private addExerciseUseCase: AddExerciseUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, type, time, level, demonstration } = request.body;

    const addExercise = await this.addExerciseUseCase.execute({
      name,
      type,
      time,
      level,
      demonstration,
    });

    return response.json(addExercise);
  }
}

export { AddExerciseController };
