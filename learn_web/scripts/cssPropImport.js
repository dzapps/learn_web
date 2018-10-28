function imports(id, text) {
  document.getElementById('animationDivCodeWithText').style.display = 'none';
  document.getElementById(id).style.display = 'block';
  document.getElementsByClassName('text')[0].innerHTML = text;
}

function importsExam(id, text, addText) {
  document.getElementById('animationDivCode').style.display = 'none';
  document.getElementById(id).style.display = 'block';
  document.getElementsByClassName('addText')[0].innerHTML = addText;
  document.getElementsByClassName('text')[1].innerHTML = text;
}
