import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    useranme: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
