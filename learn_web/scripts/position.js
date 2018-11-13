function pos(id, pos) {
  document.getElementById(id).style.position = pos;
  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}

function bottomPos(id, pos) {
  document.getElementById(id).style.bottom = pos;
  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}

function topPos(id, pos) {
  document.getElementById(id).style.top = pos;
  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}

function leftPos(id, pos) {
  document.getElementById(id).style.left = pos;
  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}

function rightPos(id, pos) {
  document.getElementById(id).style.right = pos;
  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}
