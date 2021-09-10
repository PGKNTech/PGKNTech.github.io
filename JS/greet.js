//greetings Prompt
function myFunction() {
  var person = prompt("What should we call you?", "Name");
  if (person != null) {
    document.getElementById("user").innerHTML =
    "Hello " + person + "! Welcome to PGKNT! ";
  }
}
