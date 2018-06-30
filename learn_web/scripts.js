function bordersCollapse() {
  document.getElementById('collapse').style.borderCollapse = "collapse";
  document.getElementById('table-title').innerHTML = '<span class="blue" style="padding-left: 1em;">&lt;<span class="brown">table </span><span class="crimson">style</span><span>=</span>"width: 90%; margin-left: 4em; border: 2px solid; border-collapse: collapse;"&gt;</span>';
}

function returning() {
  document.getElementById('collapse').style.borderCollapse = "separate";
  document.getElementById('collapse').style.borderSpacing = "1em";
  document.getElementById('table-title').innerHTML = '<span class="blue" style="padding-left: 1em;">&lt;<span class="brown">table </span><span class="crimson">style</span><span>=</span>"width: 90%; margin-left: 4em; border: 2px solid; border-spacing: 1em;"&gt;</span>';
}

function disc() {
  document.getElementById('diff-list').style.listStyleType = "disc";
    document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: disk"&gt;</span>'
}

function circle() {
  document.getElementById('diff-list').style.listStyleType = "circle";
  document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: circle"&gt;</span>'
}

function square() {
  document.getElementById('diff-list').style.listStyleType = "square";
    document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: square"&gt;</span>'
}

function none() {
  document.getElementById('diff-list').style.listStyleType = "none";
  document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: none"&gt;</span>'
}

function one() {
  document.getElementById('diff-ord-list').type = "1";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"1"&gt;</span>'
}

function A() {
  document.getElementById('diff-ord-list').type = "A";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"A"&gt;</span>'
}

function a() {
  document.getElementById('diff-ord-list').type = "a";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"a"&gt;</span>'
}

function I() {
  document.getElementById('diff-ord-list').type = "I";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"I"&gt;</span>'
}

function i() {
  document.getElementById('diff-ord-list').type = "i";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"i"&gt;</span>'
}
