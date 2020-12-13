const Router = require("express")
const homeRoute = require("./routes/homeRoute")
const healthcheckRoute = require("./routes/healthcheckRoute")
const statsRoute = require("./routes/statsRoute")
const echoRoute = require("./routes/echoRoute")
const metricsRoute = require("./routes/metricsRoute")
const taskRouter = require("./resources/task/task.router")
const authenticateRoute = require("./routes/authenticateRoute")
const secureRoute = require("./routes/secureRoute")

const router = Router()

router.get('/', homeRoute)
router.get('/healthcheck', healthcheckRoute)
router.get('/stats', statsRoute)
router.post('/echo', echoRoute)
router.use('/metrics', metricsRoute)
router.post('/auth', authenticateRoute)

//router.use('/api', secureRoute)
router.use('/api/task', taskRouter)

module.exports = router