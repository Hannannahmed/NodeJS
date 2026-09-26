import { signUpService } from "../service/signup.js"

export const signUpController = async (req, res) => {
    try {
        const data = await signUpService(req?.body)
        console.log(data, "Data===")
        res.status(200).json({ message: "User SignUp", data })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error", err })
    }
}