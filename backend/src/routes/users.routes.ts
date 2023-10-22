import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import nodemailer from "nodemailer";

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
usersRouter.get("/send-email", async (req, res) => {

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ff572aabf6f85c",
      pass: "2e033db9764113"
    }
  });

  const message = { 
    from: "noreply@labotech.com",
    to: "vitorsampaiodelavor@gmail.com",
    subject: "Projeto labotech",
    text: "Deu certo!!!",
    html: "<p>HTML version of the message</p>"
  };
  
  await transport.sendMail(message);

  return res.json({message: "OK"})

})


usersRouter.get("/send-email", async (req, res) => {

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "92bcdb9619d4e6",
      pass: "********8e6e"
    }

  });

  const message = { 
    from: "noreply@labotech.com",
    to: "Iara",
    subject: "Sei lá",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>"
  };
  
  await transport.sendMail(message);

  //     erro: true,
  // mensagem: "Erro: E-mail não enviado!"
  // });
})

export { usersRouter };
