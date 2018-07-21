function iframeWithoutBorder() {
  document.getElementById('iframe-deprecated').scrolling = "yes";
  document.getElementById('iframe-deprecated').frameBorder = "0";
  document.getElementById('iframe-deprecated').marginWidth = "50";
  document.getElementById('iframe-deprecated').marginHeight = "20";
  document.getElementById('iframe-deprecated').height = "100";
  document.getElementById('iframe-deprecated').width = "300";
  document.getElementById('iframe-deprecated-text').innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span><span class="crimson">src</span><span>=</span>"demo_iframe.htm" ' +
    '<span class="crimson">height</span><span>=</span>"100" ' +
    '<span class="crimson">width</span><span>=</span>"300" ' +
    '<span class="crimson">align</span><span>=</span>"right" ' +
    '<span class="crimson">frameborder</span><span>=</span>"0" ' +
    '<span class="crimson">marginwidth</span><span>=</span>"50" ' +
    '<span class="crimson">marginheight</span><span>=</span>"20" ' +
    '<span class="crimson">scrolling</span><span>=</span>"yes" ' +
    '<span class="crimson">longdesc</span><span>=</span>"example.txt"&gt; ' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe </span>&gt;</span>';
}

function iframeWithBorder() {
  document.getElementById('iframe-deprecated').scrolling = "no";
  document.getElementById('iframe-deprecated').frameBorder = "1";
  document.getElementById('iframe-deprecated').marginWidth = "80";
  document.getElementById('iframe-deprecated').marginHeight = "90";
  document.getElementById('iframe-deprecated').height = "200";
  document.getElementById('iframe-deprecated').width = "50%";
  document.getElementById('iframe-deprecated-text').innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span><span class="crimson">src</span><span>=</span>"demo_iframe.htm" ' +
    '<span class="crimson">height</span><span>=</span>"200" ' +
    '<span class="crimson">width</span><span>=</span>"50%" ' +
    '<span class="crimson">align</span><span>=</span>"right" ' +
    '<span class="crimson">frameborder</span><span>=</span>"1" ' +
    '<span class="crimson">marginwidth</span><span>=</span>"80" ' +
    '<span class="crimson">marginheight</span><span>=</span>"90" ' +
    '<span class="crimson">scrolling</span><span>=</span>"no" ' +
    '<span class="crimson">longdesc</span><span>=</span>"example.txt"&gt; ' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe </span>&gt;</span>';
}

function sandbox() {
  iframeAllowScripts.style.display = "none";
  iframeAllowSameOrigin.style.display = "none";
  iframe.style.display = "none";
  iframeSandbox.style.display = "block";
}

function allowScripts() {
  iframeAllowScripts.style.display = "block";
  iframeAllowSameOrigin.style.display = "none";
  iframe.style.display = "none";
  iframeSandbox.style.display = "none";
}

function allowSameOrigin() {
  iframeAllowScripts.style.display = "none";
  iframeAllowSameOrigin.style.display = "block";
  iframe.style.display = "none";
  iframeSandbox.style.display = "none";
}

function iframeSimple() {
  iframeAllowScripts.style.display = "none";
  iframeAllowSameOrigin.style.display = "none";
  iframe.style.display = "block";
  iframeSandbox.style.display = "none";
}
