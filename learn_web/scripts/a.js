function changeAHref(id, href, text) {
  document.getElementById(id).href = href;
  document.getElementsByClassName('replaceAHref')[0].innerHTML = text;
  document.getElementsByClassName('replaceAHref')[1].innerHTML = href;
  document.getElementsByClassName('replaceAHref')[2].innerHTML = text;
}
