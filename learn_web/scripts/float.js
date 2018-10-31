function float(id, float) {
  document.getElementById(id).style.float = float
  document.getElementsByClassName('text')[0].innerHTML = float
}

function clear(id, clear) {
  document.getElementById(id).style.clear = clear
  document.getElementsByClassName('text')[0].innerHTML = clear
}
