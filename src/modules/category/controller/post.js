import { categoryService } from "../service/post.js"

export const categoryController = async (req, res) => {
    try {
        const data = await categoryService(req.body)
        res.status(200).json({ message: "Category Created", data })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}