import { Request, Response } from "express";

import { AnamnesisFormRepository } from "../../repositories/implementations/AnamnesisFormRepository";
import { ListAllAnamnesisFormUseCase } from "./ListAllAnamnesisFormUseCase";
import { ListAllAnamnesisFormController } from "../../controllers/ListAllAnamnesisFormController";

export default (request: Request, response: Response) => {
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const listAllAnamnesisFormUseCase = new ListAllAnamnesisFormUseCase(
    anamnesisFormRepository
  );
  const listAllAnamnesisFormController = new ListAllAnamnesisFormController(
    listAllAnamnesisFormUseCase
  );

  return listAllAnamnesisFormController.handle(request, response);
};
