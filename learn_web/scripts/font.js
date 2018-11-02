function font(id, font) {
  document.getElementById(id).style.font = font
  document.getElementsByClassName('text')[0].innerHTML = font
}

function fontFull(id, style, variant, weight, size, height, family, target) {
  document.getElementById(id).style.font = `${style} ${variant} ${weight} ${size} ${height} ${family}`
  document.getElementsByClassName('text')[0].innerHTML = target
}
