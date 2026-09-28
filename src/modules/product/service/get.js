import { productGetModel } from "../db/index.js"

export const productGetService = async () => {
    try {
        const response = await productGetModel()
        return response
    } catch (err) {
        throw err
    }
}