interface ICompletedExercisesDTO {
  id?: string;
  exercise: string;
  status: string;
  level: number;
  time: number;
  userId?: string;
  created_at?: Date;
}

export { ICompletedExercisesDTO };
