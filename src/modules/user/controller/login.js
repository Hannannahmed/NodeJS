import { loginService } from "../service/login.js"


export const loginController = async (req, res) => {
    try {
        const data = await loginService(req.body)
        return res.status(200).json({
            message: "Login successful",
            data
        });
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}