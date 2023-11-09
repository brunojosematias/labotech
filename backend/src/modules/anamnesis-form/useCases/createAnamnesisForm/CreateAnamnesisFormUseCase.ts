import { UsersRepository } from "../../../accounts/repositories/implementations/UsersRepository";
import { UserAlreadyExistsError } from "../../../accounts/useCases/errors";
import { IAnamnesisFormDTO } from "../../@types/IAnamnesisFormDTO";
import { IAnamnesisFormRepository } from "../../repositories/IAnamnesisFormRepository";

class CreateAnamnesisFormUseCase {
  constructor(private anamnesisFormRepository: IAnamnesisFormRepository) {}

  async execute(
    userId: string,
    {
      gender,
      age,
      weight,
      height,
      profession,
      sittingOrStanding,
      jointProblems,
      healthProblems,
      napeNeck,
      upperBack,
      lowerBack,
      legs,
      knees,
      feetAndAnkles,
    }: IAnamnesisFormDTO
  ): Promise<IAnamnesisFormDTO> {
    const userRepository = new UsersRepository();

    const userExists = await userRepository.findById(userId);
    if (!userExists) {
      throw new UserAlreadyExistsError();
    }

    const createAnamnesisForm = await this.anamnesisFormRepository.create(
      userId,
      {
        gender,
        age,
        weight,
        height,
        profession,
        sittingOrStanding,
        jointProblems,
        healthProblems,
        napeNeck,
        upperBack,
        lowerBack,
        legs,
        knees,
        feetAndAnkles,
      }
    );

    return createAnamnesisForm;
  }
}

export { CreateAnamnesisFormUseCase };
