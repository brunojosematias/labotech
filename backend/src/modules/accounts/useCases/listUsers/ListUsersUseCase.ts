// Responsável por executar a listagem de usuários

import { IUserDTO } from "../../@types/IUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
  constructor(private usersrepository: IUsersRepository) {}

  async execute(): Promise<IUserDTO[]> {
    const users = await this.usersrepository.findAll();

    return users;
  }
}

export { ListUsersUseCase };
