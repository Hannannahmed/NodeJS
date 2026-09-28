import jwt from 'jsonwebtoken'

export const generateToken = (userId, role) => {
    return jwt.sign(
        {
            userId: userId,
            role: role
        },
        "123",
        { expiresIn: "7d" }
    )
}