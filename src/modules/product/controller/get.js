import { productGetService } from "../service/get.js"

export const productGetController = async (req, res) => {
    try {
        const response = await productGetService()
        res.status(200).json({ message: "Product Get Successfully", response })

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}