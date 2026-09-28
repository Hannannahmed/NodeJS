import { generateToken } from "../../../utils/generateToken.js"
import { signUpModel } from "../db/index.js"

export const signUpService = async (req, res) => {
    try {
        const data = await signUpModel(req)

        const token = generateToken(data?._id, data?.role)
        return { ...data, token }
    } catch (err) {
        console.log(err)
        throw err

    }
}