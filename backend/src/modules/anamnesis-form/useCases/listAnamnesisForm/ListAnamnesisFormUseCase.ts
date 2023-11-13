import { IAnamnesisFormDTO } from "../../@types/IAnamnesisFormDTO";
import { IAnamnesisFormRepository } from "../../repositories/IAnamnesisFormRepository";

class ListAnamnesisFormUseCase {
  constructor(private anamnesisFormRepository: IAnamnesisFormRepository) {}

  async execute(userId: string): Promise<IAnamnesisFormDTO> {
    const anamnesisFormR = await this.anamnesisFormRepository.findAnamnesisForm(
      userId
    );

    return anamnesisFormR;
  }
}

export { ListAnamnesisFormUseCase };
