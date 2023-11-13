interface IExercisesDTO {
  id?: string;
  name: string;
  type: string;
  time: number;
  level: number;
  demonstration: string;
  created_at?: Date;
}

export { IExercisesDTO };
