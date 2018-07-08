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
    document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: disk"&gt;</span>';
}

function circle() {
  document.getElementById('diff-list').style.listStyleType = "circle";
  document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: circle"&gt;</span>';
}

function square() {
  document.getElementById('diff-list').style.listStyleType = "square";
    document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: square"&gt;</span>';
}

function none() {
  document.getElementById('diff-list').style.listStyleType = "none";
  document.getElementById('diff-types').innerHTML = '<span class="blue">&lt;<span class="brown">ul</span><span class="crimson"> style</span><span>=</span>"list-style-type: none"&gt;</span>';
}

function one() {
  document.getElementById('diff-ord-list').type = "1";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"1"&gt;</span>';
}

function A() {
  document.getElementById('diff-ord-list').type = "A";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"A"&gt;</span>';
}

function a() {
  document.getElementById('diff-ord-list').type = "a";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"a"&gt;</span>';
}

function I() {
  document.getElementById('diff-ord-list').type = "I";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"I"&gt;</span>';
}

function i() {
  document.getElementById('diff-ord-list').type = "i";
  document.getElementById('diff-ord-types').innerHTML = '<span class="blue">&lt;<span class="brown">ol</span><span class="crimson"> type</span><span>=</span>"i"&gt;</span>';
}

function standart() {
  document.getElementById('cars').size = "1";
  document.getElementById('cars').multiple = "";
  document.getElementById('saab_select').selected = "";
  document.getElementById('cars_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">select </span><span class="crimson">name</span><span>=</span><span class="blue">"cars"&gt;</span>';
  document.getElementById('saab_select_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">option </span><span class="crimson">value</span><span>=</span><span class="blue">"saab"&gt;<span>Saab</span><span class="blue">&lt;</span><span class="brown">/option</span>&gt;</span>';
}

function size() {
  document.getElementById('cars').size = "3";
  document.getElementById('cars').multiple = "";
  document.getElementById('saab_select').selected = "";
  document.getElementById('cars_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">select </span><span class="crimson">name</span><span>=</span><span class="blue">"cars" </span><span class="crimson">size</span><span>=</span><span class="blue">"3"&gt;</span>';
  document.getElementById('saab_select_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">option </span><span class="crimson">value</span><span>=</span><span class="blue">"saab"&gt;<span>Saab</span><span class="blue">&lt;</span><span class="brown">/option</span>&gt;</span>';
}

function selected() {
  document.getElementById('cars').size = "3";
  document.getElementById('cars').multiple = "";
  document.getElementById('saab_select').selected = "selected";
  document.getElementById('cars_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">select </span><span class="crimson">name</span><span>=</span><span class="blue">"cars" </span><span class="crimson">size</span><span>=</span><span class="blue">"3"&gt;</span>';
  document.getElementById('saab_select_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">option </span><span class="crimson">value</span><span>=</span><span class="blue">"saab" </span><span class="crimson">selected</span><span>=</span><span class="blue">"selected"&gt;<span>Saab</span><span class="blue">&lt;</span><span class="brown">/option</span>&gt;</span>';
}

function multiple() {
  document.getElementById('cars').size = "3";
  document.getElementById('cars').multiple = "multiple";
  document.getElementById('saab_select').selected = "selected";
  document.getElementById('cars_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">select </span><span class="crimson">name</span><span>=</span><span class="blue">"cars" </span><span class="crimson">size</span><span>=</span><span class="blue">"3"</span><span class="crimson">multiple</span><span>=</span><span class="blue">"multiple"&gt;</span>';
  document.getElementById('saab_select_desc').innerHTML = '<span class="blue">&lt;</span><span class="brown">option </span><span class="crimson">value</span><span>=</span><span class="blue">"saab" </span><span class="crimson">selected</span><span>=</span><span class="blue">"selected"&gt;<span>Saab</span><span class="blue">&lt;</span><span class="brown">/option</span>&gt;</span>';
}
