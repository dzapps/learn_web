function changeStateSingle(id, state) {
  document.getElementById(id).style.display = state;
}

function changeVisibAndState(id1, id2, state1, state2) {
  document.getElementById(id1).style.alignContent = state1;
  document.getElementById(id1).style.WebkitAlignContent = state1;
  document.getElementById(id2).style.display = state2;

  let text = document.getElementsByClassName('text');
  len = text.length;
  for (let i=0; i<=len; i++) {
    text[i].innerHTML = state1;
  }
}

function alignItems(id1, id2, state1, state2) {
  document.getElementById(id1).style.alignItems = state1;
  document.getElementById(id1).style.WebkitAlignItems = state1;
  document.getElementById(id2).style.display = state2;

  let text = document.getElementsByClassName('text');
  len = text.length;
  for (let i=0; i<=len; i++) {
    text[i].innerHTML = state1;
  }
}

function alignSelf(id1, id2, state1, state2) {
  document.getElementById(id1).style.alignSelf = state1;
  document.getElementById(id1).style.WebkitAlignSelf = state1;

  let text = document.getElementsByClassName('text');
  len = text.length;
  for (let i=0; i<=len; i++) {
    text[i].innerHTML = state1;
  }
}

function All(id1, id2, state1) {
  document.getElementById(id1).style.all = state1;
  document.getElementsByClassName('text')[0].innerHTML = state1;
}

function clearAllProp() {
  document.getElementById('allDivExamp').style.color = 'red';
  document.getElementById('allDivExamp').style.backgroundColor = 'yellow';
  document.getElementById('allDivExamp').style.fontSize = 'small';
  document.getElementById('allDivExamp').style.display = 'block';
}

function animAttributes(id, x1, x2, duration, easing, delay, repeat, direction, fill) {
  document.getElementsByClassName('text')[0].innerHTML = (delay / 1000) + 's;';
  document.getElementById(id).animate([
    {transform: `translateX(${x1})`},
    {transform: `translateX(${x2})`}
  ], {
    duration: duration,
    easing: easing,
    delay: delay,
    iterations: repeat,
    direction: direction,
    fill: fill
  });
}

function animAttributesAddit(id, x1, x2, y1, y2, duration, easing, delay, repeat, direction, fill) {
  document.getElementsByClassName('text')[0].innerHTML = (delay / 1000) + 's;';
  document.getElementById(id).animate([
    {transform: `translateY(${y1})`},
    {transform: `translateY(${y2})`},
    {transform: 'translateX(20px)'},
    {transform: 'translateY(200px)'}
    // {transform: `translateX(${x1})`},
    // {transform: `translateX(${x2})`}
    // {transform: `translateX(${x1})`}
    // {transform: `translateX(${x2})`}
    // {transform: `translateX(${x2})`},
    // {transform: `translateY(${y1})`}
    // {transform: `translateX(${x2})`},
    // {transform: `translateX(${x1})`},
    // {transform: `translateY(${y1})`}
  ], {
    duration: duration,
    easing: easing,
    delay: delay,
    iterations: repeat,
    direction: direction,
    fill: fill
  });
}

// 0%   {background: red; left: 0px; top: 0px;}
// 25%  {background: yellow; left: 200px; top: 0px;}
//   50% {left: 200px; top: 200px;}
// 75%  {background: green; left: 0px; top: 200px;}
// 100% {background: red; left: 0px; top: 0px;}
