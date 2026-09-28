import { categoryModel } from "../db/index.js"

export const categoryService = async (data) => {
    try {
        const reponse = await categoryModel(data)
        return reponse
    } catch (err) {
        throw err
    }
}