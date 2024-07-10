
const express =require("express")
const router=express.Router()

const taskController=require(`../../controllers/taskController`)

// const verifyJWT=require("../middleware/verityJWT")
// router.use(verifyJWT)

router.post("tasks",taskController.createNewTask)
router.get("tasks/:title/:description/:finished/:importanceLevel/:endDate/",taskController.getTaskByParameters)
router.put(`tasks/`,taskController.updateTask)
router.delete(`tasks/`,taskController.deleteTask)

module.exports=router