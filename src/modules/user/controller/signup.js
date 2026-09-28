import { signUpService } from "../service/signup.js"

export const signUpController = async (req, res) => {
    try {
        const data = await signUpService(req?.body)

        res.status(200).json({ message: "User SignUp", data })

    } catch (err) {

        if (err?.code === 11000) {
            return res.status(409).json({
                message: "Email already exists"
            })
        }

        if (err?.message === "ADMIN_ALREADY_EXISTS") {
            return res.status(409).json({
                message: "Admin already exists"
            })
        }

        return res.status(400).json({
            message: "Validation Error",
            errors: Object.values(err?.errors || {}).map(
                (error) => error.message
            )
        })
    }
}