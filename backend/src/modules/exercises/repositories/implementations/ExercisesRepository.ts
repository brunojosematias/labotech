import { IExercisesDTO } from "../../@types/IExercisesDTO";
import { IExercisesRepository } from "../IExercisesRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ExercisesRepository implements IExercisesRepository {
  async findByAll(): Promise<IExercisesDTO[]> {
    const all = await prisma.exercises.findMany();

    return all;
  }

  async addExercise({
    name,
    type,
    time,
    level,
    demonstration,
  }: IExercisesDTO): Promise<IExercisesDTO> {
    const addExercise = await prisma.exercises.create({
      data: {
        name,
        type,
        time,
        level,
        demonstration,
      },
    });

    return addExercise;
  }

  async delete(id: string): Promise<void> {
    await prisma.exercises.delete({
      where: {
        id,
      },
    });
  }
}

export { ExercisesRepository };
