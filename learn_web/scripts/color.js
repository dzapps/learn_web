function color(id, color) {
  document.getElementById(id).style.color = color;
  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}
