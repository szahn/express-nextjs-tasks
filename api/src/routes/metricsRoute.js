const metricsService = require("../services/metricsService")

module.exports = (req, res) => {
    res.setHeader('Content-Type', metricsService.register.contentType)
    res.end(metricsService.register.metrics())
}

