import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => res.send("Hello from MARSHALL"));

app.listen(ENV.PORT, () =>
  console.log("Server is up and Running on PORT:", ENV.PORT)
);
