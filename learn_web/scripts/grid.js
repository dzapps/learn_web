function grid(id, grid) {
  document.getElementById(id).style.display = "grid";
  document.getElementById('gridDiv2').style.display = "none";
  document.getElementById('gridItemsDiv').style.display = "none";
  document.getElementById(id).style.grid = grid;
  document.getElementsByClassName('text')[0].innerHTML = grid;
}

function gridTable(id, gridTable) {
  document.getElementsByClassName('item7')[0].style.gridArea = 'header';
  document.getElementsByClassName('item8')[0].style.gridArea = 'menu';
  document.getElementsByClassName('item9')[0].style.gridArea = 'main';
  document.getElementsByClassName('item10')[0].style.gridArea = 'right';
  document.getElementsByClassName('item11')[0].style.gridArea = 'additional';
  document.getElementsByClassName('item12')[0].style.gridArea = 'footer';
  document.getElementById(id).style.grid = gridTable;
  document.getElementById('gridItemsDiv').style.display = "block";
  document.getElementById(id).style.display = "grid";
  document.getElementById('gridDiv').style.display = "none";
  document.getElementsByClassName('text')[0].innerHTML = gridTable;
}

function gridArea(id, gridArea) {
  document.getElementById(id).style.gridTemplateColumns = 'auto auto auto auto';
  document.getElementById(id).style.gridTemplateAreas = '';
  document.getElementById('columns').style.display = 'inline';
  document.getElementById('areas').style.display = 'none';
  document.getElementsByClassName('text')[0].innerHTML = gridArea;
  document.getElementsByClassName('item4')[0].style.gridArea = gridArea;
}

function gridAreaTable(id, gridArea) {
  document.getElementById('columns').style.display = 'none';
  document.getElementById('areas').style.display = 'inline';
  document.getElementById(id).style.gridTemplateAreas = `'${gridArea} ${gridArea} ${gridArea} ${gridArea} ${gridArea}'`;
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

function gridTempl(id, gridTempl) {
  document.getElementById(id).style.display = "grid";
  document.getElementById('gridTemplDiv2').style.display = "none";
  document.getElementById('gridTemplItemsDiv').style.display = "none";
  document.getElementById(id).style.gridTemplate = gridTempl;
  document.getElementsByClassName('text')[0].innerHTML = gridTempl;
}

function gridTemplTable(id, gridTemplTable) {
  document.getElementsByClassName('item7')[0].style.gridArea = 'header';
  document.getElementsByClassName('item8')[0].style.gridArea = 'menu';
  document.getElementsByClassName('item9')[0].style.gridArea = 'main';
  document.getElementsByClassName('item10')[0].style.gridArea = 'right';
  document.getElementsByClassName('item11')[0].style.gridArea = 'additional';
  document.getElementsByClassName('item12')[0].style.gridArea = 'footer';
  document.getElementById(id).style.gridTemplate = gridTemplTable;
  document.getElementById('gridTemplItemsDiv').style.display = "block";
  document.getElementById(id).style.display = "grid";
  document.getElementById('gridTemplDiv').style.display = "none";
  document.getElementsByClassName('text')[0].innerHTML = gridTemplTable;
}

function gridTempCol(id, gridTempCol) {
  document.getElementById(id).style.gridTemplateColumns = gridTempCol;
  document.getElementsByClassName('text')[0].innerHTML = gridTempCol;
}

function gridTempRow(id, gridTempRow) {
  document.getElementById(id).style.gridTemplateRows = gridTempRow;
  document.getElementsByClassName('text')[0].innerHTML = gridTempRow;
}

function gridTemplAreas(id, gridTemplAreas) {
  document.getElementsByClassName('text')[0].innerHTML = gridTemplAreas;
  document.getElementById(id).style.gridTemplateAreas = gridTemplAreas;
  document.getElementsByClassName('item4')[0].style.gridArea = 'area1';
}
