// function highlightText(cls) {
//   let text = document.getElementsByClassName(cls);
//   let len = text.length;
//
//   for (let j=0; j<=len; j++) {
//     text[j].style.textShadow = '0 0 2px rgba(122, 7, 66, 0.86), 0 0 4px rgba(100, 0, 0, 0.7)';
//   }
// }
//
// highlightText('highlightText');

function changeImgAlign(id, pos) {
  document.getElementById(id).align = pos;
  document.getElementsByClassName('replace')[0].innerHTML = pos;
}

function changeImgAlt(id, text) {
  document.getElementById(id).src = '../images/vasserman_thinking.gif';
  document.getElementById(id).alt = text;
  document.getElementsByClassName('replace')[1].innerHTML = '..image/vasserman_thinking.gif';
  document.getElementsByClassName('replace')[2].innerHTML = text;
}

function changeImgAndSrcAlt(id, text) {
  document.getElementById(id).src = '../images/vasserman_thinking';
  document.getElementById(id).alt = text;
  document.getElementsByClassName('replace')[1].innerHTML = '..image/vasserman_thinking';
  document.getElementsByClassName('replace')[2].innerHTML = text;
}

function changeImgBorder(id, pixels) {
  document.getElementById(id).border = pixels;
  document.getElementsByClassName('replace')[3].innerHTML = pixels;
}

function changeImgHeight(id, pixels) {
  document.getElementById(id).height = pixels;
  document.getElementsByClassName('replace')[4].innerHTML = pixels;
}

function changeImgHspace(id, pixels) {
  document.getElementById(id).hspace = pixels;
  document.getElementsByClassName('replace')[5].innerHTML = pixels;
}

function changeImgLongdesc(id, source) {
  document.getElementById(id).longdesc = source;
  document.getElementsByClassName('replace')[6].innerHTML = source;
}

function changeImgSrc(id, src) {
  document.getElementById(id).src = src;
  document.getElementsByClassName('replace')[7].innerHTML = src;
}

function changeImgSrcset(id, src) {
  document.getElementById(id).srcset = src;
  document.getElementsByClassName('replace')[8].innerHTML = src;
}

function changeImgVspace(id, pixels) {
  document.getElementById(id).vspace = pixels;
  document.getElementsByClassName('replace')[12].innerHTML = pixels;
}

function changeImgWidth(id, pixels) {
  document.getElementById(id).width = pixels;
  document.getElementsByClassName('replace')[13].innerHTML = pixels;
}
