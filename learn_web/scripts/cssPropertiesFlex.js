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
