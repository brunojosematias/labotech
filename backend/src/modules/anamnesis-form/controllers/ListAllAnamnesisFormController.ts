import { Request, Response } from "express";
import { IAnamnesisFormDTO } from "../@types/IAnamnesisFormDTO";
import { ListAllAnamnesisFormUseCase } from "../useCases/listAllAnamnesisForm/ListAllAnamnesisFormUseCase";

class ListAllAnamnesisFormController {
  constructor(
    private listAllAnamnesisFormUseCase: ListAllAnamnesisFormUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const allAnamnesisFormUseCase =
      await this.listAllAnamnesisFormUseCase.execute();

    return response.json(allAnamnesisFormUseCase);
  }
}

export { ListAllAnamnesisFormController };
