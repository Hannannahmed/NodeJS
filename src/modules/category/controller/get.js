import { categoryGetService } from "../service/get.js"

export const categoryGetController = async (req, res) => {
    try {
        const response = await categoryGetService()
        res.status(200).json({ message: "Category Get Successfully", response })

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}