import mongoose from "mongoose";

const UserSch = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = new mongoose.model("User", UserSch);

export default User;
