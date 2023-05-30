import { Request, Response } from "express";

import { CreateAnamnesisFormUseCase } from "../useCases/createAnamnesisForm/CreateAnamnesisFormUseCase";
import { UserAlreadyExistsError } from "../../accounts/useCases/errors";

class CreateAnamnesisFormController {
  constructor(private createAnamnesisFormUseCase: CreateAnamnesisFormUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const {
      gender,
      weight,
      height,
      physicalActivity,
      pains,
      profession,
      smoker,
      healthProblem,
      sedentary,
      painLevel,
    } = request.body;

    try {
      const createAnamnesisForm = await this.createAnamnesisFormUseCase.execute(
        userId,
        {
          gender,
          weight,
          height,
          physicalActivity,
          pains,
          profession,
          smoker,
          healthProblem,
          sedentary,
          painLevel,
        }
      );

      return response.json(createAnamnesisForm);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(404).json({ message: error.message });
      }
    }
  }
}

export { CreateAnamnesisFormController };
