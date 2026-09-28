import { productUpdateModel } from "../db/index.js"

export const productUpdateService = async (req, id) => {
    try {
        const response = await productUpdateModel(req, id)
        return response
    } catch (err) {
        throw err
    }
}