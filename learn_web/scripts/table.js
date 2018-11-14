function captSide(id, captionSide) {
  document.getElementById(id).style.captionSide = captionSide;
  document.getElementsByClassName('text')[0].innerHTML = captionSide;
}

function tableLayout(id, tableLayout) {
  document.getElementById(id).style.tableLayout = tableLayout;
  document.getElementsByClassName('text')[0].innerHTML = tableLayout;
}

function emptyCells(id, emptyCells) {
  document.getElementById(id).style.emptyCells = emptyCells;
  document.getElementsByClassName('text')[0].innerHTML = emptyCells;
}
