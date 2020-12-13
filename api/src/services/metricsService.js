const prometheus = require('prom-client');

const register = new prometheus.Registry();

register.setDefaultLabels({
    app: 'node-api'
});

prometheus.collectDefaultMetrics({ register });

module.exports = {register}