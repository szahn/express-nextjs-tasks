const logger = require("../services/logService");

module.exports = (req, res) => {

    if (typeof req.body.message === "undefined") {
        throw new Error("Nothing to echo")
    }

    const message = req.body.message;
    logger.info(`Echo: ${message}`);

    res.status(200).send({
        message: message
    });
}