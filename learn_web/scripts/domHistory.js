function showHistory() {
  let historyLength = history.length;
  document.getElementById("historyLengthP").innerHTML = historyLength;
  document.getElementsByClassName("replace")[0].innerHTML = historyLength;
}

function historyBack() {
  window.history.back();
}

function historyForward() {
  window.history.forward();
}

function historyGo(num) {
  window.history.go(num);
  document.getElementsByClassName("replace")[0].innerHTML = num;  
}
