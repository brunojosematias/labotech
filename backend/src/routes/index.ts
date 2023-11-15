
import { Router } from "express";
import { anamnesisRouter } from "./anamnesisForm.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { exerciseRoutes } from "./exercises.routes";
import { completedExercisesRouter } from "./completedExercises.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use(usersRouter)
router.use(authenticateRoutes);
router.use(exerciseRoutes);
router.use(anamnesisRouter);
router.use(completedExercisesRouter);
router.use(authenticateRoutes);

export { router };
