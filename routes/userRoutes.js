import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import checkCredentials from "../middleware/checkCredentials.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const app = Router();

app.post("/signup", checkCredentials, async (req, res) => {
  const { email, password } = req.body;
  const encryptedPass = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ email, password: encryptedPass });
    const safeData = newUser.toObject();
    delete safeData.password;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "Created User Succesfully",
      data: safeData,
      token,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Server Error While adding user : " + e.message,
    });
  }
});

app.post("/login", checkCredentials, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No User Exists" });
    }

    const checkPass = await bcrypt.compare(password, user.password);

    if (!checkPass) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });
    }

    const safeUser = user.toObject();

    delete safeUser.password;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ success: true, message: "User Founded", data: safeUser, token });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Server Error While adding user" + e.message,
    });
  }
});

export default app;
