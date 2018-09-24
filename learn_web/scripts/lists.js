function discType() {
  document.getElementById("disc-type").style.display = "block";
  document.getElementById("circle-type").style.display = "none";
  document.getElementById("square-type").style.display = "none";
  document.getElementById("none-type").style.display = "none";
}

function circleType() {
  document.getElementById("disc-type").style.display = "none";
  document.getElementById("circle-type").style.display = "block";
  document.getElementById("square-type").style.display = "none";
  document.getElementById("none-type").style.display = "none";
}

function squareType() {
  document.getElementById("disc-type").style.display = "none";
  document.getElementById("circle-type").style.display = "none";
  document.getElementById("square-type").style.display = "block";
  document.getElementById("none-type").style.display = "none";
}

function noneType() {
  document.getElementById("disc-type").style.display = "none";
  document.getElementById("circle-type").style.display = "none";
  document.getElementById("square-type").style.display = "none";
  document.getElementById("none-type").style.display = "block";
}
