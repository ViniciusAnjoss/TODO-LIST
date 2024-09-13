const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;
    const dataUTC = new Date(Date.now()).toUTCString();
    const query =
        "INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";
    const [createdtask] = await connection.execute(query, [
        title,
        "pendente",
        dataUTC,
    ]);
    return { insertID: createdtask.insertId };
};

const deleteTask = async (id) => {
    const query = "DELETE FROM tasks WHERE id = ?";
    const removedTask = await connection.execute(query, [id]);
    return removedTask;
};

const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
    const updateTask = await connection.execute(query, [title, status, id]);
    return updateTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};
