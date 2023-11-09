import { Request, Response } from "express";
import { AnamnesisFormRepository } from "../../repositories/implementations/AnamnesisFormRepository";
import { DeleteAnamnesisFormUseCase } from "./DeleteAnamnesisFormUseCase";
import { DeleteAnamnesisFormController } from "../../controllers/DeleteAnamnesisFormController";

export default (request: Request, response: Response) => {
  const anamnesisFormRepository = new AnamnesisFormRepository();
  const deleteAnamnesisFormUseCase = new DeleteAnamnesisFormUseCase(
    anamnesisFormRepository
  );
  const deleteAnamnesisFormController = new DeleteAnamnesisFormController(
    deleteAnamnesisFormUseCase
  );

  return deleteAnamnesisFormController.handle(request, response);
};
