function showCountIncr(id1, id2) {
  let doc = document.getElementsByClassName('show');
  let len = doc.length;

  for (let j=0; j<=len; j++) {
    document.getElementById(id1).style.display = 'block';
    document.getElementById(id2).style.display = 'block';
    doc[j].style.display = 'none';
  }
}

function hyphens(id, hyphens) {
  document.getElementById(id).style.hyphens = hyphens;
  document.getElementsByClassName('text')[0].innerHTML = hyphens;
}

function quotes(id, quotes) {
  console.log(quotes)
  document.getElementById(id).style.quotes = quotes;
  document.getElementsByClassName('text')[0].innerHTML = quotes;
}

function letterSpacing(id, letterSpacing) {
  document.getElementById(id).style.letterSpacing = letterSpacing;
  document.getElementsByClassName('text')[0].innerHTML = letterSpacing;
  document.getElementsByClassName('text')[1].innerHTML = letterSpacing;
}

function tabSize(id, tabSize) {
  document.getElementById(id).style.MozTabSize = tabSize;
  document.getElementsByClassName('text')[0].innerHTML = tabSize;
  document.getElementsByClassName('text')[1].innerHTML = tabSize;
}

function textAlign(id, textAlign) {
  document.getElementById(id).style.textAlign = textAlign;
  document.getElementsByClassName('text')[0].innerHTML = textAlign;
}

function textAlignLast(id, textAlignLast) {
  document.getElementById(id).style.textAlignLast = textAlignLast;
  document.getElementsByClassName('text')[0].innerHTML = textAlignLast;
}

function textIndent(id, textIndent) {
  document.getElementById(id).style.textIndent = textIndent;
  document.getElementsByClassName('text')[0].innerHTML = textIndent;
}

function textJustify(id, textJustify) {
  document.getElementById(id).style.textJustify = textJustify;
  document.getElementsByClassName('text')[0].innerHTML = textJustify;
}

function textOverflow(id, textOverflow) {
  document.getElementById(id).style.textOverflow = textOverflow;
  document.getElementsByClassName('text')[0].innerHTML = textOverflow;
}
