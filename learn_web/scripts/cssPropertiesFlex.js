// function showAndHide(id) {
//   let a = document.getElementsByClassName('show-and-hide');
//   let lenA = a.length;
//   for (var j=0; j<=lenA; j++) {
//     document.getElementById(id).style.display = "flex";
//     a[j].style.display = "none";
//   }
// }

function flex(cls, style) {
  document.getElementsByClassName('text')[0].innerHTML = style + ';';
  let doc = document.getElementsByClassName(cls);
  for (let j=0; j<=doc.length; j++) {
    doc[j].style.flex = style;
  }
}

function flexBasis(cls, grow, shrink, basis) {
  let text = document.getElementsByClassName('text');
  for (let j=0; j<=text.length; j++) {
    text[j].innerHTML = basis;
    document.getElementById('flexBasisExam').style.flex = `${grow} ${shrink} ${basis}`;
    document.getElementById('flexBasisExam').innerHTML = basis;
  }
}

function flexDirection(id, direct) {
  document.getElementById(id).style.flexDirection = direct;
  document.getElementsByClassName('text')[0].innerHTML = direct + ';';
}

function flexFlow(id, direct, wrap) {
  document.getElementById(id).style.flexFlow = `${direct} ${wrap}`;
  document.getElementsByClassName('text')[0].innerHTML = direct + ' ' + wrap + ';';
}

function flexGrow(id, grow) {
  document.getElementById(id).style.flexGrow = grow;
  document.getElementsByClassName('text')[0].innerHTML = grow;
}

function flexShrink(id, shrink) {
  document.getElementById(id).style.flexShrink = shrink;
  document.getElementsByClassName('text')[0].innerHTML = shrink;
}
