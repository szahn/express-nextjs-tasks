const jwt = require('jsonwebtoken')
const config = require('../config')

const createToken = (user) => {
    return jwt.sign(user, config.jwt.secret, {
        expiresIn: config.jwt.expiration
    })
}

const verifyToken = async (token) => {
    return jwt.verify(token, config.jwt.secret)
}

module.exports = {createToken, verifyToken}