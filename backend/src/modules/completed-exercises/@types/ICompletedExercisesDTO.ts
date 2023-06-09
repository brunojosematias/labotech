interface ICompletedExercisesDTO {
  id?: string;
  exercise: string;
  status: string;
  timer: number;
  userId?: string;
  created_at?: Date;
}

export { ICompletedExercisesDTO };
