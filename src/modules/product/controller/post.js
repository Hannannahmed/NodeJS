import { productService } from "../service/post.js"

export const productController = async (req, res) => {
    try {
        const data = await productService(req.body)
        res.status(200).json({ message: "Product Created", data })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}