import { IExercisesDTO } from "../../@types/IExercisesDTO";
import { IExercisesRepository } from "../../repositories/IExercisesRepository";

class AddExerciseUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

  async execute({ name, type, description, demonstration }: IExercisesDTO) {
    const newExercise = await this.exercisesRepository.addExercise({
      name,
      type,
      description,
      demonstration,
    });

    return newExercise;
  }
}

export { AddExerciseUseCase };
