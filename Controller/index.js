/** First we need to retrieve elements from the index.html. 
 * I use getElementById instead of querySelector: https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/
 */


// Some of code is taken from Assignment 4 to display an error when criteria is not fulfilled
//Create a function that runs through the password and check if its correct



function createAccBtn() {
// Laver JS variabler og henter values fra html

const name = document.getElementById("fullName").value;
const email = document.getElementById("email").value;

const signUpPassword = document.getElementById("signUpPassword").value;
const age = document.getElementById("age").value;
const form_valid = true;


localStorage.setItem("fullName", name);
localStorage.setItem("email", email);
localStorage.setItem("password", signUpPassword);
localStorage.setItem("age", age);


fetch("http://localhost:3001/users", {
  method: "POST",
  body: JSON.stringify({
    name: name,
    email: email
  }),
  headers: {
    'Content-Type': 'application/json',
    authorization: "Bearer " + jwt
  }
}).then((response) => {
  if (form_valid) {
    window.location.href = "../Views/swipe.html";
  } else {
    return false;
  }
})


e.preventDefault();
}




function logInBtn() {

  var savedEmail = localStorage.getItem("email");
  var savedPassword = localStorage.getItem("password");

const logInEmail = document.getElementById("logInEmail").value;
const logInPassword = document.getElementById("logInPassword").value;

if (savedEmail == logInEmail && savedPassword == logInPassword) {
    
  window.location.href = "../Views/swipe.html";
} else {
  document.getElementById("logInError").innerHTML = "Invalid <br/>";
}
}


function deleteUser(){


  
      localStorage.removeItem("fullName")
      localStorage.removeItem("email")
      localStorage.removeItem("age")
      localStorage.removeItem("password")

      window.location.href = "../Views/login.html";


  
}

