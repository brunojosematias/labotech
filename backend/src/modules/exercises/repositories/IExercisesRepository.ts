import { IExercisesDTO } from "../@types/IExercisesDTO";

interface IExercisesRepository {
  findByAll(): Promise<IExercisesDTO[]>;
  addExercise(data: IExercisesDTO): Promise<IExercisesDTO>;
  delete(id: string): Promise<void>;
}

export { IExercisesRepository };
