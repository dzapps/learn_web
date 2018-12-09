function discType(id, type) {
  document.getElementById(id).type = type;
  document.getElementsByClassName("replaceUl")[0].innerHTML = type;
}

function listsOlReversed(id, state) {
  if (state == '') {
    document.getElementById(id).reversed = false;
    document.getElementsByClassName("replaceOl")[0].innerHTML = state;
  } else {
    document.getElementById(id).reversed = true;
    document.getElementsByClassName("replaceOl")[0].innerHTML = ' ' + state;
  }
}

function listsOlStart(id, number) {
  document.getElementById(id).start = number;
  document.getElementsByClassName("replaceStart")[0].innerHTML = number;
}

function listsOlType(id, type) {
  document.getElementById(id).type = type;
  document.getElementsByClassName("replaceType")[0].innerHTML = type;
}

function changeListsLiType(id, type) {
  document.getElementById(id).type = type;
  document.getElementsByClassName("replaceLiType")[0].innerHTML = type;
}
