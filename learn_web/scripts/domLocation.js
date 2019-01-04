function setLocationHash() {
  location.hash = "newExampleHash";
  var hash = location.hash;
  document.getElementsByClassName("replace")[0].innerHTML = hash;
  document.getElementsByClassName("replace")[1].innerHTML = hash;
}

function showLocationHost() {
  var host = location.host;
  document.getElementById("locationHostP").innerHTML = "Host:" + host;
  document.getElementsByClassName("replace")[0].innerHTML = "Host:" + host;
}

function showLocationHostname() {
  var host = location.host;
  document.getElementById("locationHostnameP").innerHTML = "Hostname:" + host;
  document.getElementsByClassName("replace")[0].innerHTML = "Hostname:" + host;
}

function showLocationHref() {
  var href = location.href;
  document.getElementById("locationHrefP").innerHTML = "Href: " + href;
  document.getElementsByClassName("replace")[0].innerHTML = "Href: " + href;

  document.getElementById("anchorHref").style.display = "none";
  document.getElementById("locationHref").style.display = "block";
}

function goToExternalHref() {
  location.href = "https://www.w3schools.com";
}

function goToAnAnchorHref() {
  location.href = "#top";
  let anchorHref = location.href
  document.getElementById("locationHrefP").innerHTML = "Href: " + anchorHref;
  document.getElementsByClassName("replace")[0].innerHTML = "Href: " + anchorHref;

  document.getElementById("anchorHref").style.display = "block";
  document.getElementById("locationHref").style.display = "none";
}

function showLocationOrigin() {
  var origin = location.origin;
  document.getElementById("locationOriginP").innerHTML = "Origin: " + origin;
  document.getElementsByClassName("replace")[0].innerHTML = "Origin: " + origin;
}

function showLocationPathname() {
  var pathname = location.pathname;
  document.getElementById("locationPathnameP").innerHTML = "Pathname: " + pathname;
  document.getElementsByClassName("replace")[0].innerHTML = "Pathname: " + pathname;
}

function showLocationPort() {
  var port = location.port;
  document.getElementById("locationPortP").innerHTML = "Port: " + port;
  document.getElementsByClassName("replace")[0].innerHTML = "Port: " + port;
}

function showLocationProtocol() {
  var protocol = location.protocol;
  document.getElementById("locationProtocolP").innerHTML = "Protocol: " + protocol;
  document.getElementsByClassName("replace")[0].innerHTML = "Protocol: " + protocol;
}

function showLocationSearch() {
  var search = location.search;
  document.getElementById("locationSearchP").innerHTML = "Search: " + search;
  document.getElementsByClassName("replace")[0].innerHTML = "Search: " + search;
}

function locationAssign() {
  location.assign("https://www.w3schools.com");
}

function locationReload() {
  location.reload();
}

function locationReplace() {
  location.replace("https://www.w3schools.com");
}
