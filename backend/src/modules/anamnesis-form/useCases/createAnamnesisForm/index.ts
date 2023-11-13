import { Request, Response } from "express";

import { AnamnesisFormRepository } from "../../repositories/implementations/AnamnesisFormRepository";
import { CreateAnamnesisFormUseCase } from "./CreateAnamnesisFormUseCase";
import { CreateAnamnesisFormController } from "../../controllers/CreateAnamnesisFormController";

export default (request: Request, response: Response) => {
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const createAnamnesisFormUseCase = new CreateAnamnesisFormUseCase(
    anamnesisFormRepository
  );
  const createAnamneisFormController = new CreateAnamnesisFormController(
    createAnamnesisFormUseCase
  );

  return createAnamneisFormController.handle(request, response);
};
