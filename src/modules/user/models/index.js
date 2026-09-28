import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"]

    }
}, {
    timestamps: true
})

export const Model = mongoose.model("User", dataSchema)