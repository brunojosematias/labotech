import { Request, Response } from "express";
import { AnamnesisFormRepository } from "../../repositories/implementations/AnamnesisFormRepository";
import { UpdateAnamnesisFormUseCase } from "./UpdateAnamnesisFormUseCase";
import { UpdateAnamnesisFormController } from "../../controllers/UpdateAnamnesisFormController";

export default (request: Request, response: Response) => {
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const updateAnamnesisFormUseCase = new UpdateAnamnesisFormUseCase(
    anamnesisFormRepository
  );
  const updateAnamnesisFormController = new UpdateAnamnesisFormController(
    updateAnamnesisFormUseCase
  );

  return updateAnamnesisFormController.handle(request, response);
};
