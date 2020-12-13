const express = require("express")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const cors = require("cors")
const winston = require('winston');
const expressWinston = require('express-winston');
const moment = require("moment")
const config = require("./config")
const router = require("./router")

const startTime = new moment()

const app = express()

app.use(helmet())
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use((err, req, res, next) => {
        console.error(err.stack)  
        res.status(500).send('Error handled')
    })
    .use(expressWinston.logger({
        transports: [
            new winston.transports.Console()
          ],
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
          ),
          meta: true,
          msg: "HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
          expressFormat: false,
          colorize: true
    }))
    .use(router)
    .use(expressWinston.errorLogger({
        dumpExceptions: true,
        showStack: true,
        transports: [
          new winston.transports.Console()
        ],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json()
        )
    }));

const start = async () => {
    try {
        console.log(`Starting ${config.name} v${config.version}`);
        console.log(`Port: ${config.port}`);
        console.log(`Environme  nt: ${config.environment}`);
        app.listen(config.port, () =>{
            const endTime = new moment();
            const startupDuration = moment.duration(endTime.diff(startTime)).asMilliseconds();
            console.log(`Started ${config.name} in ${startupDuration}ms`);
        });
    }
    catch (e){
        console.error(e)
    }
}

module.exports = {app, start}
