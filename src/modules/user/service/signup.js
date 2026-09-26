import { generateToken } from "../../../utils/generateToken.js"
import { signUpModel } from "../db/index.js"

export const signUpService = async (req, res) => {
    try {
        const data = await signUpModel(req)
        console.log(data)
        const token = generateToken(data?._id)
        return { ...data, token }
    } catch (err) {
        console.log(err)
        
    }
}