function height(id, height) {
  document.getElementById(id).style.height = height;
  document.getElementsByClassName('text')[0].innerHTML = height + ';';
}

function width(id, width) {
  document.getElementById(id).style.width = width;
  document.getElementsByClassName('text')[0].innerHTML = width + ';';
}

function maxWidth(id, maxWidth) {
  document.getElementById(id).style.maxWidth = maxWidth;
  document.getElementsByClassName('text')[0].innerHTML = maxWidth + ';';
}

function minWidth(id, minWidth) {
  document.getElementById(id).style.minWidth = minWidth;
  document.getElementsByClassName('text')[0].innerHTML = minWidth + ';';
}

function maxHeight(id, maxHeight) {
  document.getElementById(id).style.maxHeight = maxHeight;
  document.getElementsByClassName('text')[0].innerHTML = maxHeight + ';';
}

function minHeight(id, minHeight) {
  document.getElementById(id).style.minHeight = minHeight;
  document.getElementsByClassName('text')[0].innerHTML = minHeight + ';';
}
