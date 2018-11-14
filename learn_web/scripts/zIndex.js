function zIndex(id, id2, zIndex, zIndex2) {
  document.getElementById(id).style.zIndex = zIndex;
  document.getElementById(id2).style.zIndex = zIndex2;
  document.getElementsByClassName('text')[0].innerHTML = zIndex;
  document.getElementsByClassName('text')[1].innerHTML = zIndex2;
}
