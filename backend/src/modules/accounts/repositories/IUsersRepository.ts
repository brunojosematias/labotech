import { IUserDTO } from "../@types/IUserDTO";

interface IUsersRepository {
  findAll(): Promise<IUserDTO[]>;
  findById(id: string): Promise<IUserDTO>;
  findByEmail(email: string): Promise<IUserDTO>;
  create(data: IUserDTO): Promise<IUserDTO>;
  update(id: string, data: IUserDTO): Promise<IUserDTO>;
  updateAvatar(id: string, avatar: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
