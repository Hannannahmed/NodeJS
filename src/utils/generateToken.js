import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    return jwt.sign(
        { userId },
        "123",
        { expiresIn: "7d" }
    )
}