/**
 * Utility command to generate a fake JWT for authorizing against API resources
 */

const jwtService = require("./services/jwtService")
const userStore = require("./data/userStore")

const token = jwtService.createToken(userStore.getUser("demo"))

process.stdout.write(token);

