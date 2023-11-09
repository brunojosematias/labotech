import { ICompletedExercisesRepository } from "../../repositories/ICompletedExercisesRepository";

class DeleteCompletedExercisesUseCase {
  constructor(
    private completedExercisesRepository: ICompletedExercisesRepository
  ) {}

  async execute(userId: string): Promise<void> {
    await this.completedExercisesRepository.delete(userId);
  }
}

export { DeleteCompletedExercisesUseCase };
