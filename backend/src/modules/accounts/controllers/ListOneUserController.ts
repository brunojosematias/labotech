import { Request, Response } from "express";

import { ListOneUserUseCase } from "../useCases/listOneUser/ListOneUserUseCase";
import { UserAlreadyExistsError } from "../useCases/errors";

class ListOneUserController {
  constructor(private listOneUserUseCase: ListOneUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.listOneUserUseCase.execute(id);

      return response.json(user);
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(404).json({ message: error.message });
      }
    }
  }
}

export { ListOneUserController };
