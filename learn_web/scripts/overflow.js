function overflow(id, overflow) {
  document.getElementById(id).style.overflow = overflow;
  document.getElementsByClassName('text')[0].innerHTML = overflow;
}

function overflowX(id, overflowX) {
  document.getElementById(id).style.overflowX = overflowX;
  document.getElementsByClassName('text')[0].innerHTML = overflowX;
}

function overflowY(id, overflowY) {
  document.getElementById(id).style.overflowY = overflowY;
  document.getElementsByClassName('text')[0].innerHTML = overflowY;
}
