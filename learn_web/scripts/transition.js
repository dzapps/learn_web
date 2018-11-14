function transition(id, transition) {
  document.getElementById(id).style.transition = transition;
  document.getElementsByClassName('text')[0].innerHTML = transition;
}

function transitionDuration(id, transitionDuration) {
  document.getElementById(id).style.transitionDuration = transitionDuration;
  document.getElementsByClassName('text')[0].innerHTML = transitionDuration;
}

function transitionDelay(id, transitionDelay) {
  document.getElementById(id).style.transitionDelay = transitionDelay;
  document.getElementsByClassName('text')[0].innerHTML = transitionDelay;
}

function transitionProp(id, transitionProp) {
  document.getElementById(id).style.transitionProperty = transitionProp;
  document.getElementsByClassName('text')[0].innerHTML = transitionProp;
}

function transitionTimingFunction(id, transitionTimingFunction) {
  document.getElementById(id).style.transitionTimingFunction = transitionTimingFunction;
  document.getElementsByClassName('text')[0].innerHTML = transitionTimingFunction;
}
