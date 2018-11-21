
function audioPreload(id, preload) {
  document.getElementById(id).preload = preload;
  document.getElementsByClassName("replace")[0].innerHTML = preload;
}

function audioSrc(id, src) {
  document.getElementById(id).src = src;
  document.getElementsByClassName("replace")[0].innerHTML = src;
}
