import { Request, Response } from "express";

import { DeleteAnamnesisFormUseCase } from "../useCases/deleteAnamnesisForm/DeleteAnamnesisFormUseCase";

class DeleteAnamnesisFormController {
  constructor(private deleteAnamnesisFormUseCase: DeleteAnamnesisFormUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { userId } = request.params;

    await this.deleteAnamnesisFormUseCase.execute(userId);

    response.sendStatus(204);
  }
}

export { DeleteAnamnesisFormController };
