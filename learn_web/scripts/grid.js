function grid(id, grid) {
  document.getElementById(id).style.grid = grid;
  document.getElementsByClassName('text')[0].innerHTML = grid;
}

function gridArea(gridArea) {
  document.getElementsByClassName('text')[0].innerHTML = gridArea;
  document.getElementsByClassName('item4')[0].style.gridArea = gridArea;
}

function gridGap(id, gridGap) {
  document.getElementById(id).style.gridGap = gridGap;
  document.getElementsByClassName('text')[0].innerHTML = gridGap;
}

function gridAutoCol(id, gridAutoCol) {
  document.getElementById(id).style.gridAutoColumns = gridAutoCol;
  document.getElementsByClassName('text')[0].innerHTML = gridAutoCol;
}

function gridAutoRows(id, gridAutoRows) {
  document.getElementById(id).style.gridAutoRows = gridAutoRows;
  document.getElementsByClassName('text')[0].innerHTML = gridAutoRows;
}

function gridAutoFlow(id, gridAutoFlow) {
  document.getElementById(id).style.gridAutoFlow = gridAutoFlow;
  document.getElementsByClassName('text')[0].innerHTML = gridAutoFlow;
}

function gridCol(gridCol) {
  document.getElementsByClassName('text')[0].innerHTML = gridCol;
  document.getElementsByClassName('item1')[0].style.gridColumn = gridCol;
}

function gridRow(gridRow) {
  document.getElementsByClassName('text')[0].innerHTML = gridRow;
  document.getElementsByClassName('item1')[0].style.gridRow = gridRow;
}

function gridColStart(gridColStart) {
  document.getElementsByClassName('text')[0].innerHTML = gridColStart;
  document.getElementsByClassName('item4')[0].style.gridColumnStart = gridColStart;
}

function gridColEnd(gridColEnd) {
  document.getElementsByClassName('text')[0].innerHTML = gridColEnd;
  document.getElementsByClassName('item1')[0].style.gridColumnEnd = gridColEnd;
}

function gridColGap(id, gridColGap) {
  document.getElementById(id).style.gridColumnGap = gridColGap;
  document.getElementsByClassName('text')[0].innerHTML = gridColGap;
}

function gridRowStart(gridRowStart) {
  document.getElementsByClassName('text')[0].innerHTML = gridRowStart;
  document.getElementsByClassName('item1')[0].style.gridRowStart = gridRowStart;
}

function gridRowEnd(gridRowEnd) {
  document.getElementsByClassName('text')[0].innerHTML = gridRowEnd;
  document.getElementsByClassName('item1')[0].style.gridRowEnd = gridRowEnd;
}

function gridRowGap(id, gridRowGap) {
  document.getElementById(id).style.gridRowGap = gridRowGap;
  document.getElementsByClassName('text')[0].innerHTML = gridRowGap;
}

function gridTempCol(id, gridTempCol) {
  document.getElementById(id).style.gridTemplateColumns = gridTempCol;
  document.getElementsByClassName('text')[0].innerHTML = gridTempCol;
}

function gridTempRow(id, gridTempRow) {
  document.getElementById(id).style.gridTemplateRows = gridTempRow;
  document.getElementsByClassName('text')[0].innerHTML = gridTempRow;
}
