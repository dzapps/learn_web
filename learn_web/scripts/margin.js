function margin(id, margin) {
  document.getElementById(id).style.margin = margin;
  document.getElementsByClassName('text')[0].innerHTML = margin;
}
function marginBott(id, marginBott) {
  document.getElementById(id).style.marginBottom = marginBott;
  document.getElementsByClassName('text')[0].innerHTML = marginBott;
}

function marginTop(id, marginTop) {
  document.getElementById(id).style.marginTop = marginTop;
  document.getElementsByClassName('text')[0].innerHTML = marginTop;
}

function marginLeft(id, marginLeft) {
  document.getElementById(id).style.marginLeft = marginLeft;
  document.getElementsByClassName('text')[0].innerHTML = marginLeft;
}

function marginRight(id, marginRight) {
  document.getElementById(id).style.marginRight = marginRight;
  document.getElementsByClassName('text')[0].innerHTML = marginRight;
}
