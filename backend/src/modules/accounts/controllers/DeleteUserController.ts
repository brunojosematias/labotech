import { Request, Response } from "express";

import { DeleteUserUseCase } from "../useCases/deleteUser/DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUsersUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    await this.deleteUsersUseCase.execute(id);

    return response.sendStatus(204);
  }
}

export { DeleteUserController };
