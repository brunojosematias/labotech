import { ICompletedExercisesDTO } from "../../@types/ICompletedExercisesDTO";
import { ICompletedExercisesRepository } from "../../repositories/ICompletedExercisesRepository";

class CreateCompletedExercisesUseCase {
  constructor(
    private completedExercisesRepository: ICompletedExercisesRepository
  ) {}

  async execute(
    userId: string,
    { exercise, status, timer }: ICompletedExercisesDTO
  ): Promise<ICompletedExercisesDTO> {
    const completedExercises =
      await this.completedExercisesRepository.addExercise(userId, {
        exercise,
        status,
        timer,
      });

    return completedExercises;
  }
}

export { CreateCompletedExercisesUseCase };
