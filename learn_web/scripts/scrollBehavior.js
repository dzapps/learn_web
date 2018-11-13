function scrollBehavior(id, scrollBehavior) {
  document.body.style.scrollBehavior = scrollBehavior;
  document.getElementsByClassName('text')[0].innerHTML = scrollBehavior + ';';
}
