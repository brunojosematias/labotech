import { Request, Response } from "express";

import { UpdateUserAvatarUseCase } from "../useCases/updateUserAvatar/UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const avatar_file = request.file.filename;

    await this.updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
