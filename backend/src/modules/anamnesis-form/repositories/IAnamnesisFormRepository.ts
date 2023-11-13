import { IAnamnesisFormDTO } from "../@types/IAnamnesisFormDTO";

interface IAnamnesisFormRepository {
  findAll(): Promise<IAnamnesisFormDTO[]>;
  // findById(id: string): Promise<IAnamnesisFormDTO>;
  findAnamnesisForm(userId: string): Promise<IAnamnesisFormDTO>;
  create(userId: string, data: IAnamnesisFormDTO): Promise<IAnamnesisFormDTO>;
  update(id: string, data: IAnamnesisFormDTO): Promise<IAnamnesisFormDTO>;
  delete(userId: string): Promise<void>;
}

export { IAnamnesisFormRepository };
