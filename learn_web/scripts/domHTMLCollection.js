function showHTMLCollectionLength() {
  let but, i, arr;
  arr = [];
  but = document.getElementsByTagName("button");
  for (i = 0; i < but.length; i++) {
    arr.push(but[i].attributes[0].name);
  }
  document.getElementById("HTMLCollectionLengthP").innerHTML = arr;
  document.getElementsByClassName("replace")[0].innerHTML = arr;
}

function showHTMLCollectionItem() {
  let butNum = prompt("Input button number:");

  let but = document.getElementsByTagName("button").item(butNum).innerHTML;
  document.getElementById("HTMLCollectionItemP").innerHTML = but;
  document.getElementsByClassName("replace")[0].innerHTML = but;

  document.getElementById("collectionItem").style.display = "block";
  document.getElementById("collectionItemShort").style.display = "none";
}


function showHTMLCollectionItemShortMethod() {
  let butNum = prompt("Input button number:");

  let but = document.getElementsByTagName("button")[butNum].innerHTML;
  document.getElementById("HTMLCollectionItemP").innerHTML = but;
  document.getElementsByClassName("replace")[0].innerHTML = but;

  document.getElementById("collectionItem").style.display = "none";
  document.getElementById("collectionItemShort").style.display = "block";
}

function showHTMLCollectionNamedItem() {
  let itemName = prompt("Input p name:");

  let but = document.getElementsByTagName("p").namedItem(itemName).innerHTML;
  document.getElementById("HTMLCollectionNamedItemP").innerHTML = but;
  document.getElementsByClassName("replace")[0].innerHTML = but;

  document.getElementById("collectionNamedItem").style.display = "block";
  document.getElementById("collectionNamedItemShort").style.display = "none";
}

function showHTMLCollectionNamedItemShortMethod() {
  let itemName = prompt("Input p name:");

  let but = document.getElementsByTagName("p")[itemName].innerHTML;
  document.getElementById("HTMLCollectionNamedItemP").innerHTML = but;
  document.getElementsByClassName("replace")[0].innerHTML = but;

  document.getElementById("collectionNamedItem").style.display = "none";
  document.getElementById("collectionNamedItemShort").style.display = "block";
}
