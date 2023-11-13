import { IUserDTO } from "../../@types/IUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UserAlreadyExistsError } from "../errors";

class UpdateUserUSeCase {
  constructor(private usersrepository: IUsersRepository) {}

  async execute(
    id,
    { name, surname, email, password }: IUserDTO
  ): Promise<IUserDTO> {
    const userAlredyExists = await this.usersrepository.findById(id);

    if (!userAlredyExists) {
      throw new UserAlreadyExistsError();
    }

    const dataUser = await this.usersrepository.update(id, {
      name,
      surname,
      email,
      password,
    });

    return dataUser;
  }
}

export { UpdateUserUSeCase };
