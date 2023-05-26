import { Router } from "express";
import authenticateUser from "../modules/accounts/useCases/authenticateUser";

const authenticateRoutes = Router();

authenticateRoutes.post("/sessions", authenticateUser);

export { authenticateRoutes };
