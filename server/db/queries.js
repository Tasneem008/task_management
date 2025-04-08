const pool = require("./db.js");

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

async function insertUsers(user) {
  await pool.query(
    "INSERT INTO USERS(name,email,password) VALUES ($1, $2, $3)",
    [user.name, user.email, user.password]
  );
}

async function getAllTasks() {
  const { rows } = await pool.query("SELECT * FROM TASKS");
  return rows;
}

async function insertTasks(task) {
  await pool.query(
    "INSERT INTO tasks(userid, iscompleted, taskname) VALUES ($1, $2, $3)",
    [task.userid, task.iscompleted, task.taskname]
  );
}

async function deleteTask(taskId) {
  await pool.query("DELETE FROM tasks WHERE tid=$1", [taskId]);
}

module.exports = {
  getAllUsers,
  insertUsers,
  getAllTasks,
  insertTasks,
  deleteTask,
};
