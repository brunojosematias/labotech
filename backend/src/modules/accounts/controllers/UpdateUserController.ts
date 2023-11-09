import { Request, Response } from "express";

import { UpdateUserUSeCase } from "../useCases/updateUser/UpdateUserUseCase";
import { UserAlreadyExistsError } from "../useCases/errors";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUSeCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, surname, email, password } = request.body;

    try {
      const createUser = await this.updateUserUseCase.execute(id, {
        name,
        surname,
        email,
        password,
      });

      return response.json(createUser);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(404).json({ message: error.message });
      }
    }
  }
}

export { UpdateUserController };
