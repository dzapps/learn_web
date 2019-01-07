var myWindow;

function openWindow() {
  myWindow = window.open("", "myWindow", "width=400, height=200");
}

function closeWindow() {
  if (myWindow) {
    myWindow.close();
  }
}

function checkWindow() {
  if (myWindow.closed) {
    document.getElementById('windowClosedP').innerHTML = 'The window was closed.'
    document.getElementsByClassName('replace')[0].innerHTML = 'The window was closed.'
  } else {
    document.getElementById('windowClosedP').innerHTML = 'The window was open.';
    document.getElementsByClassName('replace')[0].innerHTML = 'The window was open.'
  }
}

function checkFrameElement() {
  let frame = window.frameElement;
  console.log(frame);

  if (frame) {
    frame.src = "https://www.w3schools.com/";
  } else {
    document.getElementById('windowFrameElementP').innerHTML = 'Frames don\'t exist.';
    document.getElementsByClassName('replace')[0].innerHTML = 'Frames don\'t exist.';
  }
}

function replaceFrameData() {
  window.frames[0].location = "https://liquimoly.ru/";
  document.getElementsByClassName('replace')[0].innerHTML = '"https://liquimoly.ru/"';
}

function showInnerHeight() {
  var h = window.innerHeight;
  document.getElementById("windowInnerHeightP").innerHTML = "Inner height: " + h;
  document.getElementsByClassName("replace")[0].innerHTML = "Inner height: " + h;
}
