function font (id, font) {
  document.getElementById(id).style.font = font
  document.getElementsByClassName('text')[0].innerHTML = font
}

function fontFamily (id, family) {
  document.getElementById(id).style.fontFamily = family
  document.getElementsByClassName('text')[0].innerHTML = family
}

function fontKerning (id, kerning) {
  document.getElementById(id).style.fontKerning = kerning
  document.getElementsByClassName('text')[0].innerHTML = kerning
}

function fontSize (id, size) {
  document.getElementById(id).style.fontSize = size
  document.getElementsByClassName('text')[0].innerHTML = size
}

function fontSizeAdjust (adjust) {
  document.getElementById('fontSizeAdjustP').style.fontSizeAdjust = adjust
  document.getElementById('fontSizeAdjustP2').style.fontSizeAdjust = adjust
  document.getElementsByClassName('text')[0].innerHTML = adjust
}
