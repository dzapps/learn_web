function resize(id, resize) {
  document.getElementById(id).style.resize = resize;
  document.getElementsByClassName('text')[0].innerHTML = resize + ';';
}
