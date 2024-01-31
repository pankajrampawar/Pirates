const { verifyToken, generateRefreshToken, generateAccessToken } = require("../utils/tokenUtils");
require('dotenv').config();

const authMiddleware = async (req, res, next) => {

    const { accessToken, refreshToken } = req.cookies;

    if (!accessToken || !refreshToken) {
        return res.status(401).json({ message: "unathorized" });
    }

    console.log("decoding");
    const decoded = verifyToken(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (decoded) {
        req.userId = decoded.userId;
        return next();
    }

    console.log("access token invalid");
    const decodedRefreshToken = verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    
    if (!decodedRefreshToken) {
        console.log("refresh token not found");
        return res.status(401).json({ message: "unauthorized, plz login in again."});
    }

    const newAccessToken = generateAccessToken(decodedRefreshToken.userId);

    if (!newAccessToken) {
        return res.status(500).json({ message: "unable to genrated access token, please login again."});
    }
    
    req.userId = decodedRefreshToken.userId;

    res.cookie('accessToken', newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    });

    return next();
};

module.exports = authMiddleware;
