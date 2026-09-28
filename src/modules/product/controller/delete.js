import { deleteProductService } from "../service/delete.js"

export const deleteProductController = async (req, res) => {
    try {
        const id = req.params.id
        const response = await deleteProductService(id)
        res.status(200).json({ message: "Deleted Successfully" })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}