import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import createAnamnesisForm from "../modules/anamnesis-form/useCases/createAnamnesisForm";
import listAnamnesisForm from "../modules/anamnesis-form/useCases/listAnamnesisForm";
import updateAnamnesisForm from "../modules/anamnesis-form/useCases/updateAnamnesisForm";
import deleteAnamnesisForm from "../modules/anamnesis-form/useCases/deleteAnamnesisForm";
import listAllAnamnesisForm from "../modules/anamnesis-form/useCases/listAllAnamnesisForm";

const anamnesisRouter = Router();

// Rotas responsáveis por manipular os dados da ficha de anamnese
anamnesisRouter.get("/anamnesis", listAllAnamnesisForm);
anamnesisRouter.use(ensureAuthenticated);
anamnesisRouter.get("/users/:userId/anamnesis", listAnamnesisForm);
anamnesisRouter.post("/users/:userId/anamnesis", createAnamnesisForm);
anamnesisRouter.put("/anamnesis/:id", updateAnamnesisForm);
anamnesisRouter.delete("users/:userId/anamnesis", deleteAnamnesisForm);

export { anamnesisRouter };
