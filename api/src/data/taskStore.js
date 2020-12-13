const moment = require("moment")
const { v4: uuidv4 } = require('uuid')

let _tasks = null

const taskFactory = ({title, priority}) => {
    if (_tasks == null) _tasks = {}

    const created = moment().unix()
    const task = {
        id: uuidv4(),
        title,
        priority: priority,
        isComplete: false,
        created: created,
        modified: created
    }

    _tasks[task.id] = task

    console.log(`Created Task: ${JSON.stringify(task)}`)

    return task
}

const seedStore = () => {
    _tasks = {}
    taskFactory({title: "Eat", priority: 0})
    taskFactory({title: "Sleep", priority: 1})
    taskFactory({title: "Code", priority: 2})
}

const getStore = () => {

    if (!_tasks) {
        seedStore()
    }

    return _tasks
}

const setStore = (tasks) =>{
    _tasks = tasks
}

module.exports = {taskFactory, getStore, setStore}