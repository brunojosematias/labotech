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

const testePath = path.join(__dirname, "../tmp/avatar");
app.use(express.static(testePath));

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("server started: http://localhost:3333"));
