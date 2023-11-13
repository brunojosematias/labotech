import { Router } from "express";
import listCompletedExercises from "../modules/completed-exercises/useCases/listCompletedExercises";
import createCompletedExercises from "../modules/completed-exercises/useCases/createCompletedExercises";
import deleteAnamnesisForm from "../modules/anamnesis-form/useCases/deleteAnamnesisForm";

const completedExercisesRouter = Router();

completedExercisesRouter.get(
  "/users/:userId/completed-exercises",
  listCompletedExercises
);
completedExercisesRouter.post(
  "/users/:userId/completed-exercises",
  createCompletedExercises
);

completedExercisesRouter.delete(
  "/users/:userId/completed-exercises",
  deleteAnamnesisForm
);

export { completedExercisesRouter };
