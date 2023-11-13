import dayjs from "dayjs";

import { IRefreshTokenRepository } from "../repositories/IRefreshTokenRepository";
import { IRefreshTokenDTO } from "../@types/IRefreshTokenDTO";

class GenerateRefreshToken {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  async execute(userId: string): Promise<IRefreshTokenDTO> {
    const expiresIn = dayjs().add(15, "second").unix();

    const generateRefreshToken = await this.refreshTokenRepository.create(
      userId,
      expiresIn
    );

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
