function changeStateSingle(id, state) {
  document.getElementById(id).style.display = state;
}

function changeVisibAndState(id1, id2, state1, state2) {
  document.getElementById(id1).style.alignContent = state1;
  document.getElementById(id1).style.WebkitAlignContent = state1;
  document.getElementById(id2).style.display = state2;

  let text = document.getElementsByClassName('text');
  len = text.length;
  for (let i=0; i<=len; i++) {
    text[i].innerHTML = state1;
  }
}

function alignItems() {

}
