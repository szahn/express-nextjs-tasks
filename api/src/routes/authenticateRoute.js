const userStore = require("../data/userStore")
const jwtService = require("../services/jwtService")

module.exports = (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;

    if (userName == "demo" && password == "demo"){
        const token = jwtService.createToken(userStore.getUser(userName))
    
        res.status(200).send({
            token: token
        });
    }
    else {
        return res.status(401).end()
    }
}