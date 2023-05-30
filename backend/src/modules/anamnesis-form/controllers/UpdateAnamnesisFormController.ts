import { Request, Response } from "express";

import { UpdateAnamnesisFormUseCase } from "../useCases/updateAnamnesisForm/UpdateAnamnesisFormUseCase";
import { UserAlreadyExistsError } from "../../accounts/useCases/errors";

class UpdateAnamnesisFormController {
  constructor(private updateAnamnesisFormUseCase: UpdateAnamnesisFormUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

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
      const createAnamnesisForm = await this.updateAnamnesisFormUseCase.execute(
        id,
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

export { UpdateAnamnesisFormController };
