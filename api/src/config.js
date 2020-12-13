const DEFAULT_PORT = 3001

module.exports = {
    name: process.env.API_NAME,
    version: process.env.RELEASE_VERSION,
    environment: process.env.NODE_ENV || "development",
    port: Number(process.env.API_PORT) || DEFAULT_PORT,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiration: '100d'
    }
}