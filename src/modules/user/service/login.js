import { loginModel } from "../db/index.js"

export const loginService = async (data) => {
    const user = await loginModel(data);

    const token = generateToken(user._id);

    return {
        ...user,
        token
    };
};