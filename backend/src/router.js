const express = require("express");
const router = express.Router();

const tasksController = require("./controllers/tasksController");
const {
    validateStatus,
    validatetitle,
} = require("./middlewares/tasksmiddlesware");

router.get("/tasks", tasksController.getAll);
router.post("/tasks", validatetitle, (req, res) => {
    res.status(200).json({ message: "Dados validados com sucesso" });
});
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
    "/tasks/:id",
    validatetitle,
    validateStatus,
    tasksController.updateTask
);

module.exports = router;
