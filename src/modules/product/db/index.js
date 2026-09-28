import { Model } from "../models/index.js"

export const productModel = async (data) => {
    const response = await Model.create(data)
    await response.populate("category")

    return response
}
export const productGetModel = async () => {
    const response = await Model.find().populate('category')

    return response
}
export const productUpdateModel = async (data, id) => {
    const response = await Model.findOneAndUpdate(
        { _id: id },
        data, 
        { new: true }
    )

    return response
}
export const deleteProductModel = async (id) => {
    const response = await Model.findOneAndDelete({ _id: id })

    return response
}