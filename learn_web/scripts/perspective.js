function perspect(id, perspect) {
  document.getElementById(id).style.perspective = perspect;
  document.getElementsByClassName('text')[0].innerHTML = perspect;
}

function perspectOrig(id, perspectOrig) {
  document.getElementById(id).style.perspectiveOrigin = perspectOrig;
  document.getElementsByClassName('text')[0].innerHTML = perspectOrig;
}
