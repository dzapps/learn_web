function outline(id, outline) {
  document.getElementById(id).style.outline = outline;
  document.getElementsByClassName('text')[0].innerHTML = outline;
}

function outlineColor(id, outlineColor) {
  document.getElementById(id).style.outlineColor = outlineColor;
  document.getElementsByClassName('text')[0].innerHTML = outlineColor;
}

function outlineWidth(id, outlineWidth) {
  document.getElementById(id).style.outlineWidth = outlineWidth;
  document.getElementsByClassName('text')[0].innerHTML = outlineWidth;
}

function outlineStyle(id, outlineStyle) {
  document.getElementById(id).style.outlineStyle = outlineStyle;
  document.getElementsByClassName('text')[0].innerHTML = outlineStyle;
}

function outlineOffset(id, outlineOffset) {
  document.getElementById(id).style.outlineOffset = outlineOffset;
  document.getElementsByClassName('text')[0].innerHTML = outlineOffset;
}
