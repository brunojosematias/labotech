import express from "express";
import cors from "cors";
import { router } from "./routes";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// const avatarPath = path.join(__dirname, "../tmp/avatar");

// app.use(express.static(avatarPath));

const avatarPath = path.join(__dirname, "../tmp/avatar");
const exercisesNeckOne = path.join(__dirname, "../exercises");

app.use("/avatar", express.static(avatarPath));
app.use("/exercises", express.static(exercisesNeckOne));

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("server started: http://localhost:3333"));
