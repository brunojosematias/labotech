import { Router } from "express";
import { usersRouter } from "./users.routes";
import { anamnesisRouter } from "./anamnesisForm.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { exerciseRoutes } from "./exercises.routes";
import { completedExercisesRouter } from "./completedExercises.routes";

const router = Router();

router.use(authenticateRoutes);
router.use(usersRouter);
router.use(exerciseRoutes);
router.use(anamnesisRouter);
router.use(completedExercisesRouter);

export { router };
