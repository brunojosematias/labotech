import { validate } from "uuid";
import { checkEmail } from "../../../../utils/checkEmail";
import { IUserDTO } from "../../@types/IUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import {
  EmailExists,
  NameExists,
  PasswordExists,
  SurnameExists,
  AccountAlreadyExistsError,
  ValidateEmail,
} from "../errors/";

class CreateUserUseCase {
  constructor(private usersrepository: IUsersRepository) {}

  async execute({
    name,
    surname,
    email,
    password,
  }: IUserDTO): Promise<IUserDTO> {
    if (!name) {
      throw new NameExists();
    }

    if (!surname) {
      throw new SurnameExists();
    }

    if (checkEmail(email)) {
      throw new ValidateEmail();
    }
    if (!email) {
      throw new EmailExists();
    }
    if (!password) {
      throw new PasswordExists();
    }

    const userAlredyExists = await this.usersrepository.findByEmail(email);
    if (userAlredyExists) {
      throw new AccountAlreadyExistsError();
    }

    const dataUser = await this.usersrepository.create({
      name,
      surname,
      email,
      password,
    });

    return dataUser;
  }
}

export { CreateUserUseCase };
