function audioPreload(id, preload) {
  document.getElementById(id).preload = preload;
  document.getElementsByClassName("replace")[0].innerHTML = preload;
}

function audioSrc(id, src) {
  document.getElementById(id).src = src;
  document.getElementsByClassName("replace")[0].innerHTML = src;
}

function videoHeight(id, height) {
  document.getElementById(id).style.height = height;
  document.getElementsByClassName("replace")[0].innerHTML = height;
}

function videoWidth(id, width) {
  document.getElementById(id).style.width = width;
  document.getElementsByClassName("replace")[0].innerHTML = width;
}
