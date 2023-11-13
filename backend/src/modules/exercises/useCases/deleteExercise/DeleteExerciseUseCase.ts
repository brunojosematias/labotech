import { IExercisesRepository } from "../../repositories/IExercisesRepository";

class DeleteExerciseUseCase {
  constructor(private exerciseRepository: IExercisesRepository) {}

  async execute(id: string): Promise<void> {
    await this.exerciseRepository.delete(id);
  }
}

export { DeleteExerciseUseCase };
