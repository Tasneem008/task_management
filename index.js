const taskform = document.getElementById("task-form");

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  })
    .then(function () {
      fetchAndShowTask();
      console.log("Sent to server");
    })
    .catch(function (err) {
      console.log(err);
    });
}

function createTask(tasks) {
  const taskContainer = document.getElementById("task-container");
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    const row = document.createElement("tr");
    const checkboxcell = document.createElement("td");
    const checkboxlabel = document.createElement("label");
    const checkboxinput = document.createElement("input");
    const taskcell = document.createElement("td");
    const updatecell = document.createElement("td");
    const updatebutton = document.createElement("button");
    const deletecell = document.createElement("td");
    const deletebutton = document.createElement("button");

    checkboxinput.setAttribute("type", "checkbox");
    checkboxinput.setAttribute("class", "checkbox");

    updatebutton.setAttribute("class", "btn btn-primary btn-xs");
    updatebutton.innerText = "Update";

    deletebutton.setAttribute("class", "btn btn-error btn-xs");
    deletebutton.innerText = "Delete";
    deletebutton.onclick = deleteTask;

    taskcell.innerText = tasks[i].taskname;

    checkboxlabel.appendChild(checkboxinput);
    checkboxcell.appendChild(checkboxlabel);

    updatecell.appendChild(updatebutton);

    deletecell.appendChild(deletebutton);

    row.appendChild(checkboxcell);
    row.appendChild(taskcell);
    row.appendChild(updatecell);
    row.appendChild(deletecell);
    taskContainer.appendChild(row);
  }
}

function fetchAndShowTask() {
  fetch("http://localhost:3000/tasks")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      createTask(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

document.addEventListener("DOMContentLoaded", fetchAndShowTask);

taskform.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("inside of tasks");

  const taskname = e.target.task.value;

  const task = {
    userid: 1,
    iscompleted: false,
    taskname: taskname,
  };

  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then(function () {
      fetchAndShowTask();
      console.log("Sent to server");
    })
    .catch(function (err) {
      console.log(err);
    });
});
