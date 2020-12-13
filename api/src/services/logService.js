const winston = require('winston')

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
})

function log(level, msg) {
    switch (level) {
        case "warn":
        case "warning": {
            logger.warn(msg);
            break;
        }
        case "error": {
            logger.error(msg);
            break;
        }
        case "debug": {
            logger.debug(msg);
            break;
        }
        default:
        case "information":
        case "info": {
            logger.info(msg);
            break;
        }
    }
}

function debug(msg) {
    log("debug", msg);
}

function warn(msg) {
    log("warn", msg);
}

function error(msg) {
    log("error", msg)
}

function info(msg){
    log("info", msg)
}

module.exports = {debug, warn, error, info}
