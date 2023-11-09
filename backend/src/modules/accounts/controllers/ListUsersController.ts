import { Request, Response } from "express";

import { ListUsersUseCase } from "../useCases/listUsers/ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listUsersUseCase.execute();

    return response.json(all);
  }
}

export { ListUsersController };
