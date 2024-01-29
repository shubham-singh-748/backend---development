import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    diagonsedWith: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    gender: { type: String, enum: ["MALE", "FEMALE"], required: true },
    address: { type: [addressSchema] },
    admittedIN: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  },
  { timestamps: true }
);

export const Paitent = mongoose.model("Paitent", patientSchema);
