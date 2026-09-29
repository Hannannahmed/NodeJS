import { generateOtp } from "../../../utils/generateOtp.js"
import { generateToken } from "../../../utils/generateToken.js"
import { sendOtpEmail } from "../../../utils/sendOtpEmail.js"
import { otpModel } from "../../otp/db/index.js"
import { signUpModel } from "../db/index.js"

export const signUpService = async (req, res) => {
    try {
        const data = await signUpModel(req)


        const otp = generateOtp()

        await otpModel({
            userId: data._id,
            email: data.email,
            otp: otp.toString(),
            expiresAt: new Date(Date.now() + 5 * 60 * 1000)
        })

        await sendOtpEmail(data?.email, otp)

        return { ...data }
    } catch (err) {
        console.log(err)
        throw err

    }
}