var os = require("os");
const moment = require("moment")

module.exports = (req, res) => {
    const stats = {
        host: os.hostname(),
        node: process.version,
        time: new moment().format()
    }

    res.status(200).send(stats)
}