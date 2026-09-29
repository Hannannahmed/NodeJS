import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "hannanahmed1563@gmail.com",
        pass: "tsofpnzvxydqmmvb"
    }
})