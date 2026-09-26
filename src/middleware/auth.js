import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, "123");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Unauthorized"
        });
    }

}