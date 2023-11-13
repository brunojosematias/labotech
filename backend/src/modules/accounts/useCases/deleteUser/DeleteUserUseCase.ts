import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAnamnesisFormRepository } from "../../../anamnesis-form/repositories/IAnamnesisFormRepository";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";
import { ICompletedExercisesRepository } from "../../../completed-exercises/repositories/ICompletedExercisesRepository";

class DeleteUserUseCase {
  constructor(
    private usersrepository: IUsersRepository,
    private anamnesisFormRepository: IAnamnesisFormRepository,
    private refreshTokenRepository: IRefreshTokenRepository,
    private completedExercisesRepository: ICompletedExercisesRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.anamnesisFormRepository.delete(id);

    await this.completedExercisesRepository.delete(id);

    await this.refreshTokenRepository.delete(id);

    await this.usersrepository.delete(id);
  }
}

export { DeleteUserUseCase };
