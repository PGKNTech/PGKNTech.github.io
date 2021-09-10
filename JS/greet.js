//greetings Prompt
document.getElementById("user").addEventListener("click", myGreeting);

function myGreeting() {
alert("Hello There! Click Ok to continue")
var person = prompt("What should we call you?", "Name");
  if (person != null) {
    document.getElementById("user").innerHTML =
    "Greetings " + person + "! Welcome to PGKNT! ";
  }
