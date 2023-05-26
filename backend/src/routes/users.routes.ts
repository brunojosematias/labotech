import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";

import listUsers from "../modules/accounts/useCases/listUsers";
import createUsers from "../modules/accounts/useCases/createUsers";
import updateUser from "../modules/accounts/useCases/updateUser";
import deleteUser from "../modules/accounts/useCases/deleteUser";
import listOneUser from "../modules/accounts/useCases/listOneUser";
import updateUserAvatar from "../modules/accounts/useCases/updateUserAvatar";

import uploadConfig from "../config/upload";

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

// Rotas responsáveis por manipular os dados de usuário
usersRouter.get("/users", listUsers);
usersRouter.get("/users/:id", listOneUser);
usersRouter.post("/users", createUsers);
usersRouter.put("/users/:id", updateUser);
usersRouter.delete("/users/:id", deleteUser);
usersRouter.patch(
  "/users/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatar
);

export { usersRouter };
