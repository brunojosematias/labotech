import { ICompletedExercisesDTO } from "../../@types/ICompletedExercisesDTO";
import { ICompletedExercisesRepository } from "../ICompletedExercisesRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CompletedExercisesRepository implements ICompletedExercisesRepository {
  async findAll(userId: string): Promise<ICompletedExercisesDTO[]> {
    const all = await prisma.completedExercises.findMany({
      where: {
        userId,
      },
    });

    return all;
  }

  async addExercise(
    userId: string,
    { exercise, status, time, level }: ICompletedExercisesDTO
  ): Promise<ICompletedExercisesDTO> {
    const completedExercises = await prisma.completedExercises.create({
      data: {
        exercise,
        status,
        time,
        level,
        userId,
      },
    });

    return completedExercises;
  }

  async delete(userId: string): Promise<void> {
    await prisma.completedExercises.deleteMany({
      where: {
        userId,
      },
    });
  }
}

export { CompletedExercisesRepository };
