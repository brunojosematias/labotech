import { hash } from "bcrypt";

import { IUserDTO } from "../../@types/IUserDTO";
import { IUsersRepository } from "../IUsersRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
  async findAll(): Promise<IUserDTO[]> {
    const all = await prisma.user.findMany();

    return all;
  }

  async findById(id: string): Promise<IUserDTO> {
    const [user] = await prisma.user.findMany({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<IUserDTO> {
    const [user] = await prisma.user.findMany({
      where: {
        email,
      },
    });

    return user;
  }

  async create({
    name,
    surname,
    email,
    password,
  }: IUserDTO): Promise<IUserDTO> {
    const passwordHash = await hash(password, 8);

    const newUser = await prisma.user.create({
      data: {
        name,
        surname,
        email,
        password: passwordHash,
      },
    });

    return newUser;
  }

  async update(
    id: string,
    { name, surname, email, password, avatar }: IUserDTO
  ): Promise<IUserDTO> {
    const passwordHash = await hash(password, 8);
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        surname,
        email,
        password: passwordHash,
        avatar,
      },
    });

    return updateUser;
  }

  async updateAvatar(id: string, avatar: string): Promise<void> {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        avatar,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}

export { UsersRepository };
