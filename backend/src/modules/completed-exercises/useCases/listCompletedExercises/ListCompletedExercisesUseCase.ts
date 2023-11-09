import { ICompletedExercisesDTO } from "../../@types/ICompletedExercisesDTO";
import { ICompletedExercisesRepository } from "../../repositories/ICompletedExercisesRepository";

class ListCompletedExercisesUseCase {
  constructor(
    private completedExercisesRepository: ICompletedExercisesRepository
  ) {}

  async execute(userId: string): Promise<ICompletedExercisesDTO[]> {
    const completedExercises = await this.completedExercisesRepository.findAll(
      userId
    );

    return completedExercises;
  }
}

export { ListCompletedExercisesUseCase };
