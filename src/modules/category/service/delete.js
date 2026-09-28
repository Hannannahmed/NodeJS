import { deleteCatModel } from "../db/index.js"

export const deleteCatService = async (id) => {
    try {
        const response = await deleteCatModel(id)
        return response
    } catch (err) {
        throw err
    }
}