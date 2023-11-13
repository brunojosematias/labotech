import { IAnamnesisFormDTO } from "../../@types/IAnamnesisFormDTO";
import { IAnamnesisFormRepository } from "../../repositories/IAnamnesisFormRepository";

class ListAllAnamnesisFormUseCase {
  constructor(private anamnesisFormRepository: IAnamnesisFormRepository) {}

  async execute(): Promise<IAnamnesisFormDTO[]> {
    const anamnesisFormR = await this.anamnesisFormRepository.findAll();

    return anamnesisFormR;
  }
}

export { ListAllAnamnesisFormUseCase };
