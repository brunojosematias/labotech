import { IRefreshTokenDTO } from "../@types/IRefreshTokenDTO";

interface IRefreshTokenRepository {
  findByToken(refresh_token: string): Promise<IRefreshTokenDTO>;
  create(userId: string, expiresIn: number): Promise<IRefreshTokenDTO>;
  delete(userId: string): Promise<void>;
}

export { IRefreshTokenRepository };
