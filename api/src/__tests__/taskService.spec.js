const taskService = require("../resources/task/task.service")

describe("Task Service", () => {

    beforeEach(() => {
        taskService.clearTasks();
    })

    test('Create Task', async () => {
        const task = taskService.createTask({title: "A task"});
        expect(task.title).toBe("A task")
    })

    test('Get Task', async () => {
        const {id} = taskService.createTask({title: "A task"});
        const task = taskService.getTask(id);
        expect(task.title).toBe("A task")
    })

    test('Get Tasks', async () => {
        taskService.createTask({title: "A task"});
        taskService.createTask({title: "Another task"});
        const taskCount = taskService.getTasks().length
        expect(taskCount).toBe(2)
    })

    test('Delete Task', async () => {
        const {id} = taskService.createTask({title: "A task"});
        taskService.deleteTask(id);
        const taskCount = taskService.getTasks().length
        expect(taskCount).toBe(0)
    })

    test('Update Task', async () => {
        const {id} = taskService.createTask({title: "A task"});
        taskService.updateTask(id, {title: "Another task"});
        const task = taskService.getTask(id);
        expect(task.title).toBe("Another task")
    })

})