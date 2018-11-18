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

function textShadow(id, textShadow) {
  document.getElementById(id).style.textShadow = textShadow;
  document.getElementsByClassName('text')[0].innerHTML = textShadow;
}

function textTransform(id, textTransform) {
  document.getElementById(id).style.textTransform = textTransform;
  document.getElementsByClassName('text')[0].innerHTML = textTransform;
}

function textDecorLine(id, textDecorLine) {
  document.getElementById(id).style.textDecorationLine = textDecorLine;
  document.getElementsByClassName('text')[0].innerHTML = textDecorLine;
}

function textDecorColor(id, textDecorColor) {
  document.getElementById(id).style.textDecorationColor = textDecorColor;
  document.getElementsByClassName('text')[0].innerHTML = textDecorColor;
}

function textDecorStyle(id, textDecorStyle) {
  document.getElementById(id).style.textDecorationStyle = textDecorStyle;
  document.getElementsByClassName('text')[0].innerHTML = textDecorStyle;
}

function textDecor(id, textDecor) {
  document.getElementById(id).style.textDecoration = textDecor;
  document.getElementsByClassName('text')[0].innerHTML = textDecor;
}

function unicodeBidi(id, unicodeBidi) {
  document.getElementById(id).style.unicodeBidi = unicodeBidi;
  document.getElementsByClassName('text')[0].innerHTML = unicodeBidi;
}

function direction(id, direction) {
  document.getElementById(id).style.direction = direction;
  document.getElementsByClassName('text')[0].innerHTML = direction;
}

function userSelect(id, userSelect) {
  document.getElementById(id).style.MozUserSelect = userSelect;
  document.getElementsByClassName('text')[0].innerHTML = userSelect;
}

function whiteSpace(id, whiteSpace) {
  document.getElementById(id).style.whiteSpace = whiteSpace;
  document.getElementsByClassName('text')[0].innerHTML = whiteSpace;
}

function wordBreak(id, wordBreak) {
  document.getElementById(id).style.wordBreak = wordBreak;
  document.getElementsByClassName('text')[0].innerHTML = wordBreak;
}

function wordSpacing(id, wordSpacing) {
  document.getElementById(id).style.wordSpacing = wordSpacing;
  document.getElementsByClassName('text')[0].innerHTML = wordSpacing;
}

function wordWrap(id, wordWrap) {
  document.getElementById(id).style.wordWrap = wordWrap;
  document.getElementsByClassName('text')[0].innerHTML = wordWrap;
}

function writingMode(id, writingMode) {
  document.getElementById(id).style.writingMode = writingMode;
  document.getElementsByClassName('text')[0].innerHTML = writingMode;
}
