const taskform = document.getElementById("task-form");

taskform.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("inside of tasks");

  const taskname = e.target.task.value;

  

  const task = {
    userid: 1,
    iscompleted: false,
    taskname: taskname,
  };

  fetch('http://localhost:3000/tasks', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(task)
  }).then(function(){
    console.log('Sent to server')
  }).catch(function(err){
    console.log(err)
  })
});


