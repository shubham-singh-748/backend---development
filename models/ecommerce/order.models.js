import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  prodcutID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, required: true },
});

const addressSchema = new mongoose.Schema({
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: { type: String, required: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: { type: [orderItemSchema] },
    address: { type: [addressSchema] },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
