interface IAnamnesisFormDTO {
  id?: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  profession: string;
  sittingOrStanding: string;
  jointProblems: string;
  healthProblems: string;
  napeNeck: number;
  upperBack: number;
  lowerBack: number;
  legs: number;
  knees: number;
  feetAndAnkles: number;
  created_at?: Date;
}

export { IAnamnesisFormDTO };
