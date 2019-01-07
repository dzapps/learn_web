function showAvailHeight() {
  document.getElementById("screenAvailHeightP").innerHTML = "Available height: " + screen.availHeight + 'px';
  document.getElementsByClassName("replace")[0].innerHTML = "Available height: " + screen.availHeight + 'px';
}

function showAvailWidth() {
  document.getElementById("screenAvailWidthP").innerHTML = "Available width: " + screen.availWidth + 'px';
  document.getElementsByClassName("replace")[0].innerHTML = "Available width: " + screen.availWidth + 'px';
}

function showHeight() {
  document.getElementById("screenHeightP").innerHTML = "Total height: " + screen.height + 'px';
  document.getElementsByClassName("replace")[0].innerHTML = "Total height: " + screen.height + 'px';
}

function showWidth() {
  document.getElementById("screenWidthP").innerHTML = "Total width: " + screen.width + 'px';
  document.getElementsByClassName("replace")[0].innerHTML = "Total width: " + screen.width + 'px';
}

function showColorDepth() {
  document.getElementById("screenColorDepthP").innerHTML = "Color depth: " + screen.colorDepth + ' bits per px';
  document.getElementsByClassName("replace")[0].innerHTML = "Color depth: " + screen.colorDepth + ' bits per px';
}

function showPixelDepth() {
  document.getElementById("screenPixelDepthP").innerHTML = "Color resolution: " + screen.pixelDepth + ' bits per px';
  document.getElementsByClassName("replace")[0].innerHTML = "Color resolution: " + screen.pixelDepth + ' bits per px';
}
