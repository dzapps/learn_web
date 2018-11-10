function opacity(id, color, opacity) {
  document.getElementById(id).style.opacity = opacity;
  document.getElementById(id).style.background = color;
  document.getElementsByClassName('text')[0].innerHTML = color;
  document.getElementsByClassName('text')[1].innerHTML = opacity;
}
