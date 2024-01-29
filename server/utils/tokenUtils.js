const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign({ userId: user._id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
}

function generateRefreshToken(user) {
    return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
};
