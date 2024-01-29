import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    complete: { type: boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodosSchema);
