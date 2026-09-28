import { productUpdateService } from "../service/put.js"

export const productUpdateController = async (req, res) => {
    try {
        const id = req.params.id

        const response = await productUpdateService(req.body, id)
        res.status(200).json({ message: "Product Update", response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}