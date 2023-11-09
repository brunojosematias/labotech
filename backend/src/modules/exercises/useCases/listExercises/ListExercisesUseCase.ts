import { IExercisesDTO } from "../../@types/IExercisesDTO";
import { IExercisesRepository } from "../../repositories/IExercisesRepository";

class ListExercisesUseCase {
  constructor(private exercisesRepository: IExercisesRepository) {}

  async execute(): Promise<IExercisesDTO[]> {
    const all = await this.exercisesRepository.findByAll();

    return all;
  }
}

export { ListExercisesUseCase };
