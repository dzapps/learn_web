function filter(id, filter) {
  document.getElementById(id).style.filter = filter
  document.getElementsByClassName('text')[0].innerHTML = filter + ';'
}
