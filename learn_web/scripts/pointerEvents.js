function pointEvents(id, pointEvents) {
  document.getElementById(id).style.pointerEvents = pointEvents;
  document.getElementsByClassName('text')[0].innerHTML = pointEvents;
}
