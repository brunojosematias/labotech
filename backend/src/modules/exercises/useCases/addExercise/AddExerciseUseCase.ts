import { IExercisesDTO } from "../../@types/IExercisesDTO";
import { IExercisesRepository } from "../../repositories/IExercisesRepository";

class AddExerciseUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

  async execute({ name, type, time, level, demonstration }: IExercisesDTO) {
    const newExercise = await this.exercisesRepository.addExercise({
      name,
      type,
      time,
      level,
      demonstration,
    });

    return newExercise;
  }
}

export { AddExerciseUseCase };
