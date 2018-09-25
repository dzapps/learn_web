function changeStateSingle(id, state) {
  document.getElementById(id).style.display = state;
}

function changeVisib(id) {
  let elemsarr = document.getElementsByClassName('visibility');
  length = elemsarr.length;
  for (i=0; i<=length; i++) {
    document.getElementById(id).style.display = "flex";
    elemsarr[i].style.display = "none";
  }
}

function alignItems() {

}
