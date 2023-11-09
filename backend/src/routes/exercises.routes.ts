import { Router } from "express";
import listExercises from "../modules/exercises/useCases/listExercises";
import addExercise from "../modules/exercises/useCases/addExercise";
import deleteExercise from "../modules/exercises/useCases/deleteExercise";

const exerciseRoutes = Router();

exerciseRoutes.get("/exercises", listExercises);
exerciseRoutes.post("/exercises", addExercise);
exerciseRoutes.delete("/exercises/:id", deleteExercise);

export { exerciseRoutes };
