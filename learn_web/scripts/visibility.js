function backfaceVisib(imgId, imgState, text) {
  document.getElementById(imgId).style.backfaceVisibility = imgState;
  document.getElementById(imgId).style.transform = 'rotateY(180deg)';

  document.getElementsByClassName('text')[0].innerHTML = 'rotateY(180deg);';
  document.getElementsByClassName('text')[1].innerHTML = text + ';';
}

function visib(id, visib) {
  document.getElementById(id).style.visibility = visib;
  document.getElementsByClassName('text')[0].innerHTML = visib;
}
