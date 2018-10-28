function caretColor(id, color) {
  document.getElementById(id).style.caretColor = color;
  document.getElementById(id).value = `Caret color is ${color}`;
  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}
