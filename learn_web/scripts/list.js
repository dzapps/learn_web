function listStyleImg(idUl, listTag, listStyleImg) {
  if (listTag == 'ul') {
    document.getElementsByTagName('li')[0].style.listStyleImage = listStyleImg;
    document.getElementsByTagName('li')[1].style.listStyleImage = listStyleImg;
    document.getElementsByTagName('li')[2].style.listStyleImage = listStyleImg;

    document.getElementsByClassName('text')[0].innerHTML = listTag;
    document.getElementsByClassName('text')[1].innerHTML = listStyleImg;
  } else if (listTag == '.cake') {
    document.getElementsByTagName('li')[0].style.listStyleImage = listStyleImg;
    document.getElementsByTagName('li')[1].style.listStyleImage = 'none';
    document.getElementsByTagName('li')[2].style.listStyleImage = 'none';

    document.getElementsByClassName('text')[0].innerHTML = listTag;
    document.getElementsByClassName('text')[1].innerHTML = listStyleImg;
  }
}

function listStylePos(id, listStylePos) {
  document.getElementById(id).style.listStylePosition = listStylePos;
  document.getElementsByClassName('text')[0].innerHTML = listStylePos;
}

function listStyleType(id, listStyleType) {
  document.getElementById(id).style.listStyleType = listStyleType;
  document.getElementsByClassName('text')[0].innerHTML = listStyleType;
}
