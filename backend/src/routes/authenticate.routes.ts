import { Router } from "express";
import authenticateUser from "../modules/accounts/useCases/authenticateUser";
import refreshTokenUser from "../modules/accounts/useCases/refreshTokenUser";

const authenticateRoutes = Router();

authenticateRoutes.post("/sessions", authenticateUser);
authenticateRoutes.post("/refresh-token", refreshTokenUser);

export { authenticateRoutes };
