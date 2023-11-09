import { IAnamnesisFormDTO } from "../../@types/IAnamnesisFormDTO";
import { IAnamnesisFormRepository } from "../../repositories/IAnamnesisFormRepository";

import { UserAlreadyExistsError } from "../../../accounts/useCases/errors";

class UpdateAnamnesisFormUseCase {
  constructor(private anamnesisFormRepository: IAnamnesisFormRepository) {}

  async execute(
    id: string,
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
    // const anamneseFormExists = await this.anamnesisFormRepository.findById(id);

    // console.log(anamneseFormExists);
    // if (!anamneseFormExists) {
    //   throw new UserAlreadyExistsError();
    // }

    const updateForm = await this.anamnesisFormRepository.update(id, {
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
    });
    return updateForm;
  }
}

export { UpdateAnamnesisFormUseCase };
