const {Router} = require("express")
const controller = require("./task.controller")

const router = Router()

router.get("/", controller.getTasks)
    .get("/:taskId", controller.getTask)
    .delete("/:taskId", controller.deleteTask)
    .post("/",controller.createTask)
    .patch("/:taskId",controller.updateTask)

module.exports = router