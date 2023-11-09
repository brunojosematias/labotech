import { ICompletedExercisesDTO } from "../@types/ICompletedExercisesDTO";

interface ICompletedExercisesRepository {
  findAll(id: string): Promise<ICompletedExercisesDTO[]>;
  addExercise(
    id: string,
    data: ICompletedExercisesDTO
  ): Promise<ICompletedExercisesDTO>;
  delete(userId: string): Promise<void>;
}

export { ICompletedExercisesRepository };
