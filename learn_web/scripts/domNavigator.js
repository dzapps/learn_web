function navigatorAppCodeName() {
  var x = "Browser CodeName: " + navigator.appCodeName;
  document.getElementById("navigationAppCodeNameP").innerHTML = x + '.';
  document.getElementsByClassName("replace")[0].innerHTML = x + '.';
}

function navigatorAppName() {
  var x = "Browser Name: " + navigator.appName;
  document.getElementById("navigatorAppNameP").innerHTML = x + '.';
  document.getElementsByClassName("replace")[0].innerHTML = x + '.';
}

function navigatorAppVersion() {
  var x = "Browser Version: " + navigator.appVersion;
  document.getElementById("navigatorAppVersionP").innerHTML = x + '.';
  document.getElementsByClassName("replace")[0].innerHTML = x + '.';
}

function navigatorCookieEnabled() {
  var x = "Cookies enabled: " + navigator.cookieEnabled;
  document.getElementById("navigatorCookieEnabledP").innerHTML = x + '.';
  document.getElementsByClassName("replace")[0].innerHTML = x + '.';
}

function showLocation() {
  if (navigator.geolocation) {
    document.getElementById("navigatorGeolocationP").innerHTML = navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("navigatorGeolocationP").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function isOnLine() {
  document.getElementById("navigatorOnLineP").innerHTML = "Is the browser online? " + navigator.onLine; + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "Is the browser online? " + navigator.onLine; + '.';
}

function showLanguage() {
  document.getElementById("navigatorLanguageP").innerHTML = "Language of the browser: " + navigator.language + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "Language of the browser: " + navigator.language + '.';
}

function showPlatform() {
  document.getElementById("navigatorPlatformP").innerHTML = "Platform: " + navigator.platform + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "Platform: " + navigator.platform + '.';
}

function showProduct() {
  document.getElementById("navigatorProductP").innerHTML = "Engine name: " + navigator.product + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "Engine name: " + navigator.product + '.';
}

function showUserAgent() {
  document.getElementById("navigatorUserAgentP").innerHTML = "User-agent header: " + navigator.userAgent + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "User-agent header: " + navigator.userAgent + '.';
}

function isJavaEnabled() {
  document.getElementById("navigatorJavaEnabledP").innerHTML = "Java enabled: " + navigator.javaEnabled() + '.';
  document.getElementsByClassName("replace")[0].innerHTML = "Java enabled: " + navigator.javaEnabled() + '.';
}
