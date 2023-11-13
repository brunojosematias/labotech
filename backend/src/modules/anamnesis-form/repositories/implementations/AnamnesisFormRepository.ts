import { IAnamnesisFormDTO } from "../../@types/IAnamnesisFormDTO";
import { IAnamnesisFormRepository } from "../IAnamnesisFormRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AnamnesisFormRepository implements IAnamnesisFormRepository {
  // findById(id: string): Promise<IAnamnesisFormDTO> {
  //   throw new Error("Method not implemented.");
  // }

  async findAll(): Promise<IAnamnesisFormDTO[]> {
    const all = await prisma.anamnesisForm.findMany();

    return all;
  }

  // async findById(id: string): Promise<IAnamnesisFormDTO> {
  //   const anamneseForm = await prisma.anamnesisForm.findUnique({
  //     where: {
  //       id,
  //     },
  //   });

  //   return anamneseForm;
  // }

  async findAnamnesisForm(userId: string): Promise<IAnamnesisFormDTO> {
    const [anamnesisForm] = await prisma.anamnesisForm.findMany({
      where: {
        userId,
      },
    });

    return anamnesisForm;
  }

  async create(
    userId: string,
    {
      gender,
      age,
      weight,
      height,
      profession,
      sittingOrStanding,
      jointProblems,
      healthProblems,
      napeNeck,
      upperBack,
      lowerBack,
      legs,
      knees,
      feetAndAnkles,
    }
  ): Promise<IAnamnesisFormDTO> {
    const createAnamneisForm = await prisma.anamnesisForm.create({
      data: {
        gender,
        age,
        weight,
        height,
        profession,
        sittingOrStanding,
        jointProblems,
        healthProblems,
        napeNeck,
        upperBack,
        lowerBack,
        legs,
        knees,
        feetAndAnkles,
        userId,
      },
    });

    return createAnamneisForm;
  }

  async update(
    id: string,
    {
      gender,
      age,
      weight,
      height,
      profession,
      sittingOrStanding,
      jointProblems,
      healthProblems,
      napeNeck,
      upperBack,
      lowerBack,
      legs,
      knees,
      feetAndAnkles,
    }: IAnamnesisFormDTO
  ): Promise<IAnamnesisFormDTO> {
    const updateAnamnesisForm = await prisma.anamnesisForm.update({
      where: {
        id,
      },
      data: {
        gender,
        age,
        weight,
        height,
        profession,
        sittingOrStanding,
        jointProblems,
        healthProblems,
        napeNeck,
        upperBack,
        lowerBack,
        legs,
        knees,
        feetAndAnkles,
      },
    });

    return updateAnamnesisForm;
  }

  async delete(userId: string): Promise<void> {
    await prisma.anamnesisForm.deleteMany({
      where: {
        userId,
      },
    });
  }
}

export { AnamnesisFormRepository };
