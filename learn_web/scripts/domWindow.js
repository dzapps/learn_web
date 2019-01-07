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
