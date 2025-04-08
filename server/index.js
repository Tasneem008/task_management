const express = require("express");
const cors = require("cors");
const { getAllUsers, getAllTasks, insertUsers, insertTasks } = require("./db/queries");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send("Hello");
});

// Get All Users
app.get("/users", async function (req, res) {
  const users = await getAllUsers();
  console.log(users);
  res.status(200).send(users);
});

// Create a user
app.post("/users", async function (req, res) {
  const user = req.body;

  if (!user.name || !user.email || !user.password) {
    return res
      .status(400)
      .send({ success: false, message: "Please provide all fields" });
  }

  const addedUser = await insertUsers(user);

  res.status(201).send(addedUser);
});

app.get("/tasks", async function (req, res) {
  const tasks = await getAllTasks();
  console.log(tasks);
  res.status(200).send(tasks);
});

app.post("/tasks", async function (req, res) {
  const task = req.body;

  if (!task.userid || !task.taskname) {
    return res
      .status(400)
      .send({ success: false, message: "Please provide all fields" });
  }

  const addedTask = await insertTasks(task);

  res.status(200).send(addedTask);

});

app.listen(port, function () {
  console.log("server runnibng " + port);
});
