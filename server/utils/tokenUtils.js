const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateAccessToken(user) {
    return jwt.sign({ userId: user._id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
}

function generateRefreshToken(user) {
    return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);
}

function verifyToken(token, secret) {
    try {
        const decoded = jwt.verify(token, secret);
        
        return decoded;
    } catch (error) {
        throw new Error('token verification failded');
    }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};
