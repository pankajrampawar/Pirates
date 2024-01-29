const { verifyToken } = require("../utils/tokenUtils");
require('dotenv').config();

const authMiddleware = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(404).json({ message: "access token not found" });
        }

        const decoded = verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET);

        req.userId = decoded;

        // Call the next middleware or route handler
        next();
    } catch (error) {
        return res.status(500).json({ message: "internal server error (auth middleware)", error });
    }
};

module.exports = authMiddleware;
