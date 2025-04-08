const registerform = document.getElementById("register-form");

registerform.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstname = e.target.firstname.value;
  const lastname = e.target.lastname.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmpassword = e.target.confirmpassword.value;

  if (password !== confirmpassword) {
    return alert("password doesn't match");
  }

  const user = {
    name: firstname + " " + lastname,
    email: email,
    password: password,
  };

  console.log(user);
  

  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(user)
  }).then(function(){
    console.log('Sent to server')
  }).catch(function(err){
    console.log(err)
  })
});
