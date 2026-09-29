import { transporter } from "../config/mail.js"

export const sendOtpEmail = async (email, otp) => {

    await transporter.sendMail({
        from: "hannanahmed1563@gmail.com",
        to: email,
        subject: "Your OTP Verification Code",
        text: `Your OTP is ${otp}. This OTP will expire in 5 minutes.`
    })
}