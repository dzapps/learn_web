function boxDecorBreak(id, boxDecor) {
  document.getElementById(id).style.boxDecorationBreak = boxDecor;
  document.getElementsByClassName('text')[0].innerHTML = boxDecor + ';';
}

function showBoxShadow(id) {
  let show = document.getElementsByClassName('show');

  len = show.length;
  for (let j=0; j<=len; j++) {
    document.getElementById(id).style.display = "block";
    show[j].style.display = 'none';
  }
}

function boxShadow(id, h, v, blur, spread, color, inset) {
  data = `${h} ${v} ${blur} ${spread} ${color} ${inset}`;

  document.getElementById(id).style.boxShadow = data;
  document.getElementsByClassName('text')[0].innerHTML = data + ';';
}

function boxShadowMult(id, h, v, blur, color, h2, v2, blur2, color2, h3, v3, blur3, color3) {
  data = `${h} ${v} ${blur} ${color}, ${h2} ${v2} ${blur2} ${color2}, ${h3} ${v3} ${blur3} ${color3}`;

  document.getElementById(id).style.boxShadow = data;
  document.getElementsByClassName('text')[0].innerHTML = data + ';';
}
