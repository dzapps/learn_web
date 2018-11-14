function showTransform(id) {
  let show = document.getElementsByClassName('show');

  for (let j=0; j<=show.length; j++) {
    document.getElementById(id).style.display = 'block';
    show[j].style.display = 'none';
  }
}

function transform(id, transform) {
  document.getElementById(id).style.transform = transform;
  document.getElementsByClassName('text')[0].innerHTML = transform;
}

function transfStyle(id, transfStyle) {
  document.getElementById(id).style.transformStyle = transfStyle;
  document.getElementsByClassName('text')[0].innerHTML = transfStyle;
}

function transfOrigin(id, transfOrigin) {
  document.getElementById(id).style.transformOrigin = transfOrigin;
  document.getElementsByClassName('text')[0].innerHTML = transfOrigin;
}
