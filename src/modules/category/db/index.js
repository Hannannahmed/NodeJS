import { Model } from "../models/index.js"

export const categoryModel = async (data) => {
    const response = await Model.create(data)

    return response
}
export const categoryGetModel = async () => {
    const response = await Model.find()

    return response
}
export const categoryUpdateModel = async (data, id) => {
    const response = await Model.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    )

    return response
}
export const deleteCatModel = async (id) => {
    const response = await Model.findOneAndDelete({ _id: id })

    return response
}