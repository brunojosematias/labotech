import { IUserDTO } from "../../@types/IUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UserAlreadyExistsError } from "../errors";

class ListOneUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<IUserDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new UserAlreadyExistsError();
    }

    return user;
  }
}

export { ListOneUserUseCase };
