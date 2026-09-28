import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Category"
    }
}, {
    timestamps: true
})

export const Model = mongoose.model("Product", dataSchema)