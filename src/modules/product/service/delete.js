import { deleteProductModel } from "../db/index.js"

export const deleteProductService = async (id) => {
    try {
        const response = await deleteProductModel(id)
        return response
    } catch (err) {
        throw err
    }
}