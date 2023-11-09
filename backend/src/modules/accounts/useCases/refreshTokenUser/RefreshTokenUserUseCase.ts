import dayjs from "dayjs";

import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
import { IRefreshTokenRepository } from "../../repositories/IRefreshTokenRepository";
import { ValidateRefreshToken } from "../errors";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";

class RefreshTokenUserUseCase {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  async execute(refresh_token: string): Promise<any> {
    const refreshToken = await this.refreshTokenRepository.findByToken(
      refresh_token
    );

    if (!refreshToken) {
      throw new ValidateRefreshToken();
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    const generateRefreshTokenProvider = new GenerateTokenProvider();
    const token = await generateRefreshTokenProvider.execute(
      refreshToken.userId
    );

    if (refreshTokenExpired) {
      await this.refreshTokenRepository.delete(refreshToken.id);

      const generateRefreshTokenProvider = new GenerateRefreshToken(
        this.refreshTokenRepository
      );
      const newRefreshToken = await generateRefreshTokenProvider.execute(
        refreshToken.userId
      );

      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}

export { RefreshTokenUserUseCase };
