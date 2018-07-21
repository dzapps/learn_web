function chooseCSS() {
  document.body.style.backgroundColor = "rgb(216, 237, 243)";
  cssButtons.style.display = "block";
  htmlButtons.style.display = "none";
  jsButtons.style.display = "none";
}

function chooseHTML() {
  document.body.style.backgroundColor = "rgba(226, 192, 51, 0.35)";
  htmlButtons.style.display = "block";
  cssButtons.style.display = "none";
  jsButtons.style.display = "none";
}

function chooseJS() {
  document.body.style.backgroundColor = "rgb(255, 249, 179)";
  jsButtons.style.display = "block";
  cssButtons.style.display = "none";
  htmlButtons.style.display = "none";
}
