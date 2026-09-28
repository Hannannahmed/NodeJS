import { productModel } from "../db/index.js"

export const productService = async (data) => {
    try {
        const reponse = await productModel(data)
        return reponse
    } catch (err) {
        throw err
    }
}