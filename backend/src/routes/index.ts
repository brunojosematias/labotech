import { Router } from "express";
import { usersRouter } from "./users.routes";
import { anamnesisRouter } from "./anamnesisForm.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use(usersRouter);
router.use(authenticateRoutes);
router.use(anamnesisRouter);

export { router };
