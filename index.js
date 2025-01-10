import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "./model/user.js";

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4000;
// const uri = process.env.MONGODB_URI;

// mongoose
//   .connect(uri)
//   .then(() => console.log("DB connected"))
//   .catch((e) => console.log("Failed to connect:", e.message));

// app.use(express.json());
// app.use(cors());

// function checkCredentials(req, res, next) {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Email and Password required" });
//   }

//   if (password.length < 6) {
//     return res.status(400).json({
//       success: false,
//       message: "Password must greater then 6 characters",
//     });
//   }

//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailRegex.test(email)) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Invalid Email Format" });
//   }

//   next();
// }

// app.post("/signup", checkCredentials, async (req, res) => {
//   const { email, password } = req.body;
//   const encryptedPass = await bcrypt.hash(password, 10);

//   try {
//     const newUser = await User.create({ email, password: encryptedPass });
//     const safeData = newUser.toObject();
//     delete safeData.password;

//     res.status(200).json({
//       success: true,
//       message: "Created User Succesfully",
//       data: safeData,
//     });
//   } catch (e) {
//     res.status(500).json({
//       success: false,
//       message: "Server Error While adding user : " + e.message,
//     });
//   }
// });

// app.post("/login", checkCredentials, async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "No User Exists" });
//     }

//     const checkPass = await bcrypt.compare(password, user.password);

//     if (!checkPass) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Incorrect Password" });
//     }

//     const safeUser = user.toObject();

//     delete safeUser.password;

//     res
//       .status(200)
//       .json({ success: true, message: "User Founded", data: safeUser });
//   } catch (e) {
//     res.status(500).json({
//       success: false,
//       message: "Server Error While adding user" + e.message,
//     });
//   }
// });

app.listen(PORT, () =>
  console.log(`Server is available at http://localhost:${PORT}`)
);
