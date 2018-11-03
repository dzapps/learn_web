function grid(id, grid) {
  document.getElementById(id).style.grid = grid;
  document.getElementsByClassName('text')[0].innerHTML = grid;
}

function gridAutoCol(id, gridAutoCol) {
  document.getElementById(id).style.gridAutoColumns = gridAutoCol;
  document.getElementsByClassName('text')[0].innerHTML = gridAutoCol;
}
