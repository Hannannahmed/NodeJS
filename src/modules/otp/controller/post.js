import { otpResendService, otpService, otpVerifyService } from "../service/post.js"

export const otpController = async (req, res) => {
    try {
        const response = await otpService(req.body)
        res.status(200).json({ message: "Otp Send Successfully", response })

    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export const otpVerifyController = async (req, res) => {
    try {
        const response = await otpVerifyService(req.body)

        return res.status(200).json({
            message: "Otp Verify Successfully",
            response
        })

    } catch (err) {
       
        if (err.message === "INVALID_OR_EXPIRED_OTP") {
            return res.status(400).json({
                message: "Invalid or expired OTP"
            })
        }

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const otpResendController = async (req, res) => {
    try {
        const response = await otpResendService(req.body)

        return res.status(200).json({
            message: "OTP resent successfully",
            response
        })

    } catch (err) {
        console.log(err)

        if (err.message === "USER_NOT_FOUND") {
            return res.status(404).json({
                message: "User not found"
            })
        }

        if (err.message === "ALREADY_VERIFIED") {
            return res.status(400).json({
                message: "User already verified"
            })
        }

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}