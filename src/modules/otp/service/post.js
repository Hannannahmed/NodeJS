import { generateToken } from "../../../utils/generateToken.js"
import { Model } from "../../user/models/index.js"
import { otpModel, otpResendModel, otpVerifyModel } from "../db/index.js"

export const otpService = async (req) => {
    try {
        const response = await otpModel(req)
        return response
    } catch (err) {
        throw err
    }
}
export const otpVerifyService = async (req) => {
    try {
        const response = await otpVerifyModel(req)
        if (!response) {
            throw new Error("INVALID_OR_EXPIRED_OTP")
        }
        const userRole = await Model.findById(req?.userId)
    
        const token = generateToken(req?.userId, userRole.role)


        return { token }
    } catch (err) {
        throw err
    }
}

export const otpResendService = async (data) => {
    try {
        const response = await otpResendModel(data)

        if (!response) {
            throw new Error("USER_NOT_FOUND")
        }

        return response

    } catch (err) {
        throw err
    }
}