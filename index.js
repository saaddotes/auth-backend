import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import users from "./routes/userRoutes.js";
import dotenv from "dotenv";
import addTodos from "./routes/todos.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log("Failed to connect:", e.message));

app.use(express.json());
app.use(cors());

app.use("/auth", users);

app.use("/todos", addTodos);

app.listen(PORT, () =>
  console.log(`Server is available at http://localhost:${PORT}`)
);
