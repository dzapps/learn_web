function font (id, font) {
  document.getElementById(id).style.font = font
  document.getElementsByClassName('text')[0].innerHTML = font
}

function fontFamily (id, family) {
  document.getElementById(id).style.fontFamily = family
  document.getElementsByClassName('text')[0].innerHTML = family
}

function fontKerning (id, kerning) {
  document.getElementById(id).style.kerning = kerning
  document.getElementsByClassName('text')[0].innerHTML = kerning
}
