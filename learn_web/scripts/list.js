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
  document.getElementById('animationDivCodeUl').style.display = 'block';
  document.getElementById('animationDivCodeLevel2').style.display = 'none';
  document.getElementById('listStyleTypeContentDiv').style.display = 'none';
  document.getElementById('listStyleTypeDiv').style.display = 'block';
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).style.listStyleType = listStyleType;
  document.getElementsByClassName('text')[0].innerHTML = listStyleType;
}

function listStyleTypeContent(id) {
  document.getElementById('listStyleTypeDiv').style.display = 'none';
  document.getElementById('animationDivCodeLevel2').style.display = 'block';
  document.getElementById('animationDivCodeUl').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

function listStyle(id, listStyle) {
  document.getElementById(id).style.listStyle = listStyle;
  document.getElementsByClassName('text')[0].innerHTML = listStyle;
}
