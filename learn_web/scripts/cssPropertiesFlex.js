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

function flexWrap(id, wrap) {
  document.getElementById(id).style.flexWrap = wrap;
  document.getElementsByClassName('text')[0].innerHTML = wrap + ';';
}

function justCont(id, cont) {
  document.getElementById(id).style.justifyContent = cont;
  document.getElementsByClassName('text')[0].innerHTML = cont + ';';
}

function order(id1, id2, id3, id4, first, sec, third, fourth) {
  document.getElementById(id1).style.order = first;
  document.getElementById(id2).style.order = sec;
  document.getElementById(id3).style.order = third;
  document.getElementById(id4).style.order = fourth;
  document.getElementsByClassName('text')[0].innerHTML = first + ';';
  document.getElementsByClassName('text')[1].innerHTML = sec + ';';
  document.getElementsByClassName('text')[2].innerHTML = third + ';';
  document.getElementsByClassName('text')[3].innerHTML = fourth + ';';
}
