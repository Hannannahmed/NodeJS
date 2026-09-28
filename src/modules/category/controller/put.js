import { categoryUpdateService } from "../service/put.js"

export const categoryUpdateController = async (req, res) => {
    try {
        const id = req.params.id

        const response = await categoryUpdateService(req.body, id)
        res.status(200).json({ message: "category Update", response })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server" })
    }
}