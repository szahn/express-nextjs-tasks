const taskService = require("./task.service")

const getTask = async (req, res) => {
    try {
        const task = taskService.getTask(req.params.taskId)
        res.status(200).send(task);
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = taskService.getTasks()
        res.status(200).send(tasks);
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

const createTask = async (req, res) => {
    try {
        const task = req.body
        const createdTask = taskService.createTask({
            title: task.title,
            priority: task.priority,
            isComplete: false
        })

        res.status(200).send(createdTask);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

const updateTask = async (req, res) => {
    try {
        const task = taskService.updateTask(req.params.taskId, {
            title: req.body.title,
            priority: req.body.priority,
            isComplete: req.body.isComplete
        })

        res.status(200).send(task);
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

const deleteTask = async(req, res) => {
    try {
        taskService.deleteTask(req.params.taskId)
        res.status(200).send();
    }
    catch (err) {
        res.status(404).send(err.message);
    }
}

module.exports = {getTask, getTasks, createTask, updateTask, deleteTask}

