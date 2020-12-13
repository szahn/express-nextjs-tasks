const jwtService = require("../services/jwtService")

module.exports = async (req, res, next) => {
    const bearer = req.headers.authorization

    if (!bearer || !bearer.startsWith('Bearer ')) return res.status(401).end()

    const token = bearer.split('Bearer ')[1].trim()
    try {
        const user = await jwtService.verifyToken(token)
        req.user = user
    } catch (e) {
        return res.status(401).end()
    }

    next()
}
  