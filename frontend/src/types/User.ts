// type AnamnesisForm = {
//   id: string;
//   gender: string;
//   age: number;
//   weight: number;
//   height: number;
//   profession: string;
//   sittingOrStandin: string;
//   jointProblems: string;
//   healthProblems: string;
//   napeNeck: number;
//   back: number;
//   legs: number;
//   knees: number;
//   feetAndAnkles: number;
// };

export type User = {
  id: string;
  name: string;
  surname: string;
  email: string;
  password?: string;
  avatar?: string;
  // anamnesisForm: AnamnesisForm;
  token: string;
};
