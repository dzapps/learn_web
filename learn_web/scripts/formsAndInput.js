
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
