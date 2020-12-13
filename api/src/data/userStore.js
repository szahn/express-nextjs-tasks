const { v4: uuidv4 } = require('uuid')

let users = {

}

const getUser = (userName) => {
    if (!users[userName]) {
        users[userName] = {
            name: userName,
            id: uuidv4()
        }
    }

    return users[userName]; 
}

module.exports = {getUser}