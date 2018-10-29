function clip(id, clip) {
  document.getElementById(id).style.clip = clip;
  document.getElementsByClassName('text')[0].innerHTML = clip + ';';
}
