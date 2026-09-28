import { generateToken } from "../../../utils/generateToken.js";
import { loginModel } from "../db/index.js"

export const loginService = async (data) => {

    try {
        const user = await loginModel(data);
    
        const token = generateToken(user?._id,data?.role)
        return { ...user, token }
    } catch (err) {
        console.log(err)
        throw err

    }
};