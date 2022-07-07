// TYPEWRITER
var i = 0;
var txt = "Front-end Web Developer";
var speed = 50;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}