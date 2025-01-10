import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const app = Router();

app.post("/addtodo", authMiddleware, (req, res) => {
  const { todo } = req.body;

  if (!todo)
    return res
      .status(400)
      .json({ success: false, message: "Todo is required!" });

  res
    .status(200)
    .json({ success: true, message: "Successfuly add", data: { todo } });
});

export default app;
