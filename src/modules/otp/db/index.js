import { generateOtp } from "../../../utils/generateOtp.js"
import { Model } from "../model/index.js"

export const otpModel = async (req) => {
    const response = await Model.create(req)
    return response
}


export const otpVerifyModel = async (req) => {

    const response = await Model.findOne({
        userId: req.userId,
        otp: req.otp,
        expiresAt: { $gt: new Date() }
    })
    return response
}

export const otpResendModel = async (data) => {

    const otp = generateOtp()

    const response = await Model.findOneAndUpdate(
        { userId: data.userId },
        {
            otp: otp.toString(),
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        },
        { new: true }
    )

    return response
}