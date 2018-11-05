function isolation(id, isolation) {
  document.getElementById(id).style.isolation = isolation;
  document.getElementsByClassName('text')[0].innerHTML = isolation;
  document.getElementsByClassName('text')[1].innerHTML = isolation;
}
