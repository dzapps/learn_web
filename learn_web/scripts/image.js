function objectFit(id, objectFit) {
  document.getElementById(id).style.objectFit = objectFit;
  document.getElementsByClassName('text')[0].innerHTML = objectFit;
}

function objectPosition(id, objectPosition) {
  document.getElementById(id).style.objectPosition = objectPosition;
  document.getElementsByClassName('text')[0].innerHTML = objectPosition;
}
