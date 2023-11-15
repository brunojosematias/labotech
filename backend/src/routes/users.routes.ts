
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import multer from "multer";
import nodemailer from "nodemailer";
import { randomBytes } from 'crypto';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


import listUsers from "../modules/accounts/useCases/listUsers";
import createUsers from "../modules/accounts/useCases/createUsers";
import updateUser from "../modules/accounts/useCases/updateUser";
import deleteUser from "../modules/accounts/useCases/deleteUser";
import listOneUser from "../modules/accounts/useCases/listOneUser";
import updateUserAvatar from "../modules/accounts/useCases/updateUserAvatar";

import uploadConfig from "../config/upload";
import { hash } from "bcrypt";

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


usersRouter.patch("/send-email/:id", async (request, response) => {

  const { id } = request.params;

  function generateVerificationCode(quantity: number) {
    const code = randomBytes(quantity).toString('hex');
    return code;
  }
  
  // Gerar um código de verificação de 6 dígitos
  const verificationCode = generateVerificationCode(3);
  console.log('Código de verificação:', verificationCode);

  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "31ded16e15cf85",
      pass: "9c791c2f64259e"
    }
  });

  const message = { 
    from: "noreply@labotech.com",
    to: "mariaiarasbraga@gmail.com",
    subject: "Projeto labotech",
    text: "Seu código de verificação é: " + verificationCode,
    html: "<p>HTML version of the message</p>"
  }
  
  await transport.sendMail(message);

  await prisma.user.update({
    where:{
      id,
    },
    data: {
     verification_code: verificationCode 
    }
  });


  return response.json({message: "OK"})

})

usersRouter.patch('/new-password/:id', async (request, response) => {
  const { id } = request.params;
  const { password, verification_code} = request.body;

  const verificationCode = await prisma.user.findUnique({
    where: {
      id
    }
  })


  if (verificationCode.verification_code === verification_code) {
    const passwordHash = await hash(password, 8);
    await prisma.user.update({
      where: {
        id
      }, 
      data: {
        password : passwordHash
      }
    })
  }

  return response.json({message: "Edit password!"})

})

export {usersRouter}