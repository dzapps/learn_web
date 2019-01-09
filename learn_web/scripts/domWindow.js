let myWindow;

function openWindow() {
  myWindow = window.open("", "myWindow", "width=400, height=150");
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
  let h = window.innerHeight;
  document.getElementById("windowInnerHeightP").innerHTML = "Inner height: " + h + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Inner height: " + h + "px";
}

function showInnerWidth() {
  let w = window.innerWidth;
  document.getElementById("windowInnerWidthP").innerHTML = "Inner width: " + w + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Inner width: " + w + "px";
}

function showWindowsLength() {
  let len = window.length;
  document.getElementById("windowLengthP").innerHTML = "Number of windows: " + len;
  document.getElementsByClassName("replace")[0].innerHTML = "Number of windows: " + len;
}

function showWindowName() {
  let winName = myWindow.name;
  document.getElementById("windowNameP").innerHTML = "Window name: " + winName;
  document.getElementsByClassName("replace")[0].innerHTML = "Window name: " + winName;
}

function workWindowOpener() {
  let myWindow = window.open("", "myWindow", "width=200, height=150");
  myWindow.document.write("This is 'myWindow'");
  myWindow.opener.document.write("<p>This is the source window!</p>");
}

function showOuterHeight() {
  let h = window.outerHeight;
  document.getElementById("windowOuterHeightP").innerHTML = "Outer height: " + h + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Outer height: " + h + "px";
}

function showOuterWidth() {
  let w = window.outerWidth;
  document.getElementById("windowOuterWidthP").innerHTML = "Outer width: " + w + "px";
  document.getElementsByClassName("replace")[0].innerHTML = "Outer width: " + w + "px";
}

function showPageXOffset() {
  document.getElementById("windowPageXOffsetP").innerHTML = "pageXOffset: " + window.pageXOffset;
  document.getElementsByClassName("replace")[0].innerHTML = "pageXOffset: " + window.pageXOffset;
}

function showPageYOffset(height) {
  document.getElementById("windowPageYOffsetP").innerHTML = "pageYOffset: " + window.pageYOffset;
  document.getElementsByClassName("replace")[0].innerHTML = "pageYOffset: " + window.pageYOffset;
}

function showWindowParent() {
  document.getElementById("windowParentP").innerHTML = "Show parent window: " + window.parent.location;
  document.getElementsByClassName("replace")[0].innerHTML = "Show parent window: " + window.parent.location;
}
