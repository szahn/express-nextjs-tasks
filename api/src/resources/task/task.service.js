const moment = require("moment")
const taskStore = require("../../data/taskStore")

const clearTasks = () => {
    taskStore.setStore({})
}

const getTask = (taskId) => {
    const tasks = taskStore.getStore()
    if (tasks.hasOwnProperty(taskId)) return tasks[taskId]

    throw new Error(`Task ${taskId} not found`)
} 

const getTasks = () => {
    const tasks = taskStore.getStore()
    return Object.values(tasks)
}

const createTask = (task) => {
    return taskStore.taskFactory(task)
}

const updateTask = (taskId, updatedTask) => {
    const tasks = taskStore.getStore()
    if (!tasks.hasOwnProperty(taskId)) throw new Error(`Task ${taskId} not found`)
    updatedTask.modified = moment()
    tasks[taskId] = {...tasks[taskId], ...updatedTask} 
    return tasks[taskId]
}

const deleteTask = (taskId) => {
    const tasks = taskStore.getStore()
    if (!tasks.hasOwnProperty(taskId)) throw new Error(`Task ${taskId} not found`)

    delete tasks[taskId]
}

module.exports = {getTask, getTasks, createTask, updateTask, deleteTask, clearTasks}
