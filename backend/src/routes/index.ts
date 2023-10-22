import { Router } from "express";
import { anamnesisRouter } from "./anamnesisForm.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { exerciseRoutes } from "./exercises.routes";
import { completedExercisesRouter } from "./completedExercises.routes";

const router = Router();

router.use(exerciseRoutes);
router.use(anamnesisRouter);
router.use(completedExercisesRouter);
router.use(authenticateRoutes);

export { router };
