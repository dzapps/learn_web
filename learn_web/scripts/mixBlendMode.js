function mixBlendMode(id, mixBlendMode) {
  document.getElementById(id).style.mixBlendMode = mixBlendMode;
  document.getElementsByClassName('text')[0].innerHTML = mixBlendMode;
}
