import { IAnamnesisFormRepository } from "../../repositories/IAnamnesisFormRepository";

class DeleteAnamnesisFormUseCase {
  constructor(private anamnesisFormRepository: IAnamnesisFormRepository) {}

  async execute(userId: string): Promise<void> {
    await this.anamnesisFormRepository.delete(userId);
  }
}

export { DeleteAnamnesisFormUseCase };
