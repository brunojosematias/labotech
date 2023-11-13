import { PrismaClient } from "@prisma/client";
import { IRefreshTokenRepository } from "../IRefreshTokenRepository";
import { IRefreshTokenDTO } from "../../@types/IRefreshTokenDTO";

const prisma = new PrismaClient();

class RefreshTokenRepository implements IRefreshTokenRepository {
  async findByToken(refresh_token: string): Promise<IRefreshTokenDTO> {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token,
      },
    });

    return refreshToken;
  }

  async create(userId: string, expiresIn: number): Promise<IRefreshTokenDTO> {
    const token = await prisma.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    return token;
  }

  async delete(userId: string): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }
}

export { RefreshTokenRepository };
