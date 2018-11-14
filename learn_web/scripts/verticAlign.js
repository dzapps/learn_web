function verticAlign(id, verticAlign) {
  document.getElementById(id).style.verticalAlign = verticAlign;
  document.getElementsByClassName('text')[0].innerHTML = verticAlign;
}
