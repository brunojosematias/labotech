import { Request, Response } from "express";

import { CreateUserUseCase } from "../useCases/createUsers/CreateUserUseCase";
import {
  EmailExists,
  NameExists,
  PasswordExists,
  SurnameExists,
  AccountAlreadyExistsError,
  ValidateEmail,
} from "../useCases/errors";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, surname, email, password } = request.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        surname,
        email,
        password,
      });

      return response.json(newUser);
    } catch (error) {
      if (
        error instanceof NameExists ||
        error instanceof SurnameExists ||
        error instanceof EmailExists ||
        error instanceof PasswordExists ||
        error instanceof ValidateEmail
      ) {
        return response.status(400).json({ message: error.message });
      }

      if (error instanceof AccountAlreadyExistsError) {
        return response.status(409).json({ message: error.message });
      }
    }
  }
}

export { CreateUserController };
