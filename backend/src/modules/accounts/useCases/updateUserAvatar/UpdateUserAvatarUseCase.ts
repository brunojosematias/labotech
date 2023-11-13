import { IUsersRepository } from "../../repositories/IUsersRepository";

import { deleteFile } from "../../../../utils/file";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

class UpdateUserAvatarUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;

    await this.usersRepository.updateAvatar(user_id, user.avatar);
  }
}

export { UpdateUserAvatarUseCase };
