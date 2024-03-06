let myPassword;
let myUsername;

document.getElementById("myButton").onclick = function(){
    myPassword = document.getElementById("myPassW").value;
    myUsername = document.getElementById("myUserN").value;
    document.getElementById("welcome").innerHTML = "Welcome " + myUsername + " !";
}