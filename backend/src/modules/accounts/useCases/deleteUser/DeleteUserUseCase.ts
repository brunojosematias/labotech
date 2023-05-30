import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAnamnesisFormRepository } from "../../../anamnesis-form/repositories/IAnamnesisFormRepository";

class DeleteUserUseCase {
  constructor(
    private usersrepository: IUsersRepository,
    private anamnesisFormRepository: IAnamnesisFormRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.anamnesisFormRepository.delete(id);

    await this.usersrepository.delete(id);
  }
}

export { DeleteUserUseCase };
