function iframeWithoutBorder() {
  document.getElementById('iframe-deprecated').scrolling = "yes";
  document.getElementById('iframe-deprecated').frameBorder = "0";
  document.getElementById('iframe-deprecated').marginWidth = "50";
  document.getElementById('iframe-deprecated').marginHeight = "20";
  document.getElementById('iframe-deprecated').height = "100";
  document.getElementById('iframe-deprecated').width = "300";
  document.getElementById('iframe-deprecated-text').innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span><span class="crimson">src</span><span>=</span>"demo_iframe.html" ' +
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
    '<span class="blue">&lt;<span class="brown">iframe </span><span class="crimson">src</span><span>=</span>"demo_iframe.html" ' +
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
  iframeLinkText.style.display = "none";
  iframeStyleText.innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span>' +
    '<span class="crimson">src</span><span>=</span>"../examples/demo_iframe_sandbox.html" ' +
    '<span class="crimson">width</span><span>=</span>"50%" ' +
    '<span class="crimson">height</span><span>=</span>"200px" ' +
    '<span class="crimson">name</span><span>=</span>"framel" ' +
    '<span class="crimson">style</span><span>=</span>"<span class="crimson">border</span><span>: </span>3px solid;" ' +
    '<span class="crimson">sandbox</span>&gt;' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe</span>&gt;</span></span>';
}

function allowScripts() {
  iframeAllowScripts.style.display = "block";
  iframeAllowSameOrigin.style.display = "none";
  iframe.style.display = "none";
  iframeSandbox.style.display = "none";
  iframeLinkText.style.display = "none";
  iframeStyleText.innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span>' +
    '<span class="crimson">src</span><span>=</span>"../examples/demo_iframe_allow_scripts.html" ' +
    '<span class="crimson">width</span><span>=</span>"50%" ' +
    '<span class="crimson">height</span><span>=</span>"200px" ' +
    '<span class="crimson">name</span><span>=</span>"framel" ' +
    '<span class="crimson">style</span><span>=</span>"<span class="crimson">border</span><span>: </span>3px solid;" ' +
    '<span class="crimson">sandbox</span><span>=</span>"allow-scripts"&gt;' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe</span>&gt;</span></span>';
}

function allowSameOrigin() {
  iframeAllowScripts.style.display = "none";
  iframeAllowSameOrigin.style.display = "block";
  iframe.style.display = "none";
  iframeSandbox.style.display = "none";
  iframeLinkText.style.display = "none";
  iframeStyleText.innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span>' +
    '<span class="crimson">src</span><span>=</span>"../examples/demo_iframe_allow_same_origin.html" ' +
    '<span class="crimson">width</span><span>=</span>"50%" ' +
    '<span class="crimson">height</span><span>=</span>"200px" ' +
    '<span class="crimson">name</span><span>=</span>"framel" ' +
    '<span class="crimson">style</span><span>=</span>"<span class="crimson">border</span><span>: </span>3px solid;" ' +
    '<span class="crimson">sandbox</span><span>=</span>"allow-scripts allow&#8209;same&#8209;origin"&gt;' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe</span>&gt;</span></span>';
}

function iframeSimple() {
  iframeAllowScripts.style.display = "none";
  iframeAllowSameOrigin.style.display = "none";
  iframe.style.display = "block";
  iframeSandbox.style.display = "none";
  iframeLinkText.style.display = "block";
  iframeStyleText.innerHTML =
    '<span class="blue">&lt;<span class="brown">iframe </span>' +
    '<span class="crimson">src</span><span>=</span>"../examples/demo_iframe.html" ' +
    '<span class="crimson">width</span><span>=</span>"50%" ' +
    '<span class="crimson">height</span><span>=</span>"200px" ' +
    '<span class="crimson">name</span><span>=</span>"framel" ' +
    '<span class="crimson">style</span><span>=</span>"<span class="crimson">border</span><span>: </span>3px solid;" ' +
    '<span class="blue" style="padding-top: 1em;">&lt;<span class="brown">/iframe</span>&gt;</span></span>';
}
