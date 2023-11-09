import { Request, Response } from "express";

import { AnamnesisFormRepository } from "../../repositories/implementations/AnamnesisFormRepository";
import { ListAnamnesisFormUseCase } from "./ListAnamnesisFormUseCase";
import { ListAnamnesisFormController } from "../../controllers/ListAnamnesisFormController";

export default (request: Request, response: Response) => {
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const listAnamnesisFormUseCase = new ListAnamnesisFormUseCase(
    anamnesisFormRepository
  );
  const listAnamnesisFormController = new ListAnamnesisFormController(
    listAnamnesisFormUseCase
  );

  return listAnamnesisFormController.handle(request, response);
};
