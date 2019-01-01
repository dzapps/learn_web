function fetchAttrName() {
  let butNum = prompt('Input button number:');
  let attrNum = prompt('Input attr number:');

  if (isNaN(butNum) || isNaN(attrNum)) {
    alert('Please enter numbers!');
  } else {
    var btn = document.getElementsByTagName("button")[butNum];
    var name = btn.attributes[attrNum].name;
    document.getElementById("attrNameDiv").innerHTML = name;
    document.getElementsByClassName("replace")[0].innerHTML = name;
  }
}
