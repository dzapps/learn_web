function returnAttrName() {
  let butNum = prompt('Input button number:');
  let attrNum = prompt('Input attr number:');

  if (isNaN(butNum) || isNaN(attrNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    let name = btn.attributes[attrNum].name;
    document.getElementById("attrNameDiv").innerHTML = name;

    if (name.length > 1) {
      document.getElementsByClassName("replace")[0].innerHTML = name;
    }
  }
}

function returnAttrValue() {
  let data = document.getElementsByTagName("IMG")[0];
  data.getAttributeNode("src").value = "../images/vasserman_thinking.gif";
  let value = data.getAttributeNode("src").value;
  document.getElementById('attrValueP').innerHTML = value;
  document.getElementById('returnValue').style.display = 'block';
  document.getElementById('setValue').style.display = 'none';
  document.getElementsByClassName('replace')[0].innerHTML = '"' + value + '"';
}

function setAttrValue() {
  let data = document.getElementsByTagName("IMG")[0];
  data.getAttributeNode("src").value = "../images/scolopendra.jpg";
  document.getElementById('attrValueP').innerHTML = '';
  document.getElementById('returnValue').style.display = 'none';
  document.getElementById('setValue').style.display = 'block';
  document.getElementsByClassName('replace')[0].innerHTML = '"' + '../images/scolopendra.jpg' + '"';
}

function returnAttrSpecified() {
  let butNum = prompt('Input button number:');
  let attrNum = prompt('Input attr number:');

  if (isNaN(butNum) || isNaN(attrNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    let value = btn.attributes[attrNum].specified;
    document.getElementById("attrSpecifiedP").innerHTML = value;
    document.getElementsByClassName("replace")[0].innerHTML = value;
  }
}

function returnNamedItem() {
  let butNum = prompt('Input button number:');
  let itemName = prompt('Input item name:');

  if (isNaN(butNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    let value = btn.attributes.getNamedItem(itemName).value;
    document.getElementById("nodemapGetNameItemP").innerHTML = value;
    document.getElementsByClassName("replace")[0].innerHTML = value;
  }
}

function returnNamedItem() {
  let butNum = prompt('Input button number:');
  let itemName = prompt('Input item name:');

  if (isNaN(butNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    let value = btn.attributes.getNamedItem(itemName).value;
    document.getElementById("nodemapGetNameItemP").innerHTML = value;
    document.getElementsByClassName("replace")[0].innerHTML = value;
  }
}

function returnItem() {
  let butNum = prompt('Input button number:');
  let itemNum = prompt('Input item number:');

  if (isNaN(butNum) || isNaN(itemNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    let value = btn.attributes.item(itemNum).name;
    document.getElementById("nodemapItemP").innerHTML = value;
    document.getElementsByClassName("replace")[0].innerHTML = value;
  }
}

function returnLength() {
  let butNum = prompt('Input button number:');

  if (isNaN(butNum)) {
    alert('Please enter numbers!');
  } else {
    let len = document.getElementsByTagName("button")[butNum].attributes.length;
    document.getElementById("nodemapLengthP").innerHTML = len;
    document.getElementsByClassName("replace")[0].innerHTML = len;
  }
}

function removeNamedItem() {
  let butNum = prompt('Input button number:');
  let itemName = prompt('Input item name:');

  if (isNaN(butNum)) {
    alert('Please enter numbers!');
  } else {
    let btn = document.getElementsByTagName("button")[butNum];
    btn.attributes.removeNamedItem(itemName);
    document.getElementById("nodemapRemoveNamedItemP").innerHTML = itemName + ' removed';
    document.getElementsByClassName("replace")[0].innerHTML = itemName + ' removed';
  }
}
