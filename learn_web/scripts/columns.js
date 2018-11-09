function columnCount(id, columnCount) {
  document.getElementById(id).style.columnCount = columnCount;
  document.getElementsByClassName('text')[0].innerHTML = columnCount;
}
function columnGap(id, columnGap) {
  document.getElementById(id).style.columnGap = columnGap;
  document.getElementsByClassName('text')[0].innerHTML = columnGap;
}

function columnFill(id, columnFill) {
  document.getElementById(id).style.columnFill = columnFill;
  document.getElementsByClassName('text')[0].innerHTML = columnFill;
}

function columnSpan(id, columnSpan) {
  document.getElementById(id).style.columnSpan = columnSpan;
  document.getElementsByClassName('text')[0].innerHTML = columnSpan;
}

function columnWidth(id, columnWidth) {
  document.getElementById(id).style.columnWidth = columnWidth;
  document.getElementsByClassName('text')[0].innerHTML = columnWidth;
}
