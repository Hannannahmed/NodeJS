import { deleteCatService } from "../service/delete.js"

export const deleteCatController = async (req, res) => {
    try {
        const id = req.params.id
        const response = await deleteCatService(id)
        res.status(200).json({ message: "Deleted Successfully" })
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}