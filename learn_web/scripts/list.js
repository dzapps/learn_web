function listStyleImg(id, listStyleImg) {
  document.getElementById(id).style.listStyleImage = listStyleImg;
  document.getElementsByClassName('text')[0].innerHTML = listStyleImg;
  // document.getElementsByClassName('text')[1].innerHTML = listStyleImg;
}
