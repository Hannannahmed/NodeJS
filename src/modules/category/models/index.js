import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    categoryname: { type: String, required: true },
    description: { type: String, required: true }

}, {
    timestamps: true
})

export const Model = mongoose.model("Category", dataSchema)