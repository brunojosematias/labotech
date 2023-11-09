import { Request, Response } from "express";

import { ListAnamnesisFormUseCase } from "../useCases/listAnamnesisForm/ListAnamnesisFormUseCase";

class ListAnamnesisFormController {
  constructor(private listAnamnesisFormUseCase: ListAnamnesisFormUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const searchAnamneisForm = await this.listAnamnesisFormUseCase.execute(
      userId
    );

    return response.json(searchAnamneisForm);
  }
}

export { ListAnamnesisFormController };
