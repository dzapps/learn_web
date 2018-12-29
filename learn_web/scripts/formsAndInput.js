
function audioPreload(id, preload) {
  document.getElementById(id).preload = preload;
  document.getElementsByClassName("replace")[0].innerHTML = preload;
}

function audioSrc(id, src) {
  document.getElementById(id).src = src;
  document.getElementsByClassName("replace")[0].innerHTML = src;
}

function videoHeight(id, height) {
  document.getElementById(id).style.height = height;
  document.getElementsByClassName("replace")[0].innerHTML = height;
}

function videoWidth(id, width) {
  document.getElementById(id).style.width = width;
  document.getElementsByClassName("replace")[0].innerHTML = width;
}

function formAutocompl(id, state) {
  document.getElementById(id).autocomplete = state;
  document.getElementsByClassName("replace")[0].innerHTML = state;
}

function formNovalid(id, text) {
  let data = document.getElementsByClassName("exampleHTMLDiv");
  let len = data.length;

  for (let j=0; j<=len; j++) {
    data[j].style.display = 'none';
    document.getElementById(id).style.display = 'block';
    document.getElementsByClassName("replace")[0].innerHTML = text;
  }
}

function formTargets(id, target) {
  document.getElementById(id).target = target;
  document.getElementsByClassName("replace")[0].innerHTML = target;
}

function changeFieldsetDisabled(id, state, text) {
  document.getElementById(id).disabled = state;
  document.getElementsByClassName("replaceFieldsetDisabled")[0].innerHTML = ' ' + text;
}

function changeOptionDisabled(id, state, text) {
  document.getElementById(id).disabled = state;
  document.getElementsByClassName("replaceOptionDisabled")[0].innerHTML = ' ' + text;
}

function changeOptionSelected(id, state, text) {
  document.getElementById(id).selected = state;
  document.getElementsByClassName("replaceOptionSelected")[0].innerHTML = ' ' + text;
}

function changeOptgroupDisabled(id, state, text) {
  document.getElementById(id).disabled = state;
  document.getElementsByClassName("replaceOptgroupDisabled")[0].innerHTML = ' ' + text;
}

function changeSelectAutofocus(id, state, text) {
  document.getElementById(id).autofocus = state;
  document.getElementsByClassName("replaceSelectAutofocus")[0].innerHTML = ' ' + text;
}

function changeSelectDisabled(id, state, text) {
  document.getElementById(id).disabled = state;
  document.getElementsByClassName("replaceSelectDisabled")[0].innerHTML = ' ' + text;
}

function changeSelectSize(id, size) {
  document.getElementById(id).size = size;
  document.getElementsByClassName("replaceSelectSize")[0].innerHTML = '"' + size + '"';
}

function changeButtonDisabled(id, state, text) {
  document.getElementById(id).disabled = state;
  document.getElementsByClassName("replaceButtonDisabled")[0].innerHTML = ' ' + text;
}

function changeTextareaAutofocus(id, state, text) {
  document.getElementById(id).autofocus = state;
  document.getElementsByClassName("replaceTextareaAutofocus")[0].innerHTML = ' ' + text;
}

function changeTextareaCols(id, cols) {
  document.getElementById(id).cols = cols;
  document.getElementsByClassName("replaceTextareaCols")[0].innerHTML = '"' + cols + '"';
}
