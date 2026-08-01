let username;
document.getElementById("mybtn").onclick = function(){
username = document.getElementById("myinput").value;
document.getElementById("greet").textContent = "Hello " + username;
}