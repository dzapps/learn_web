function showStorageName() {
  localStorage.fruit1 = "Banana";
  localStorage.fruit2 = "Apple";
  localStorage.fruit3 = "Grape";
  localStorage.fruit4 = "Pineapple";

  let num = prompt("Input key number:")

  let item = localStorage.key(num);
  document.getElementById("storageKeyP").innerHTML = item;
  document.getElementsByClassName("replace")[0].innerHTML = item;
}

function showStorageItem(text) {
  localStorage.fruit1 = "Banana";
  localStorage.fruit2 = "Apple";
  localStorage.fruit3 = "Grape";
  localStorage.fruit4 = "Pineapple";

  let name = prompt("Input item name:")

  let item = localStorage.getItem(name);
  document.getElementById("storageGetItemP").innerHTML = item;
  document.getElementsByClassName("replace")[0].innerHTML = item;
  document.getElementsByClassName("replace")[1].innerHTML = text;
}

function setItem(name, value) {
  localStorage.setItem(name, value);
}

function getItem(num, name) {
  document.getElementById("storageSetItemP").innerHTML = localStorage.key(num) + " = " + localStorage.getItem(name);
  document.getElementsByClassName("replace")[0].innerHTML = localStorage.key(num) + " = " + localStorage.getItem(name);
}

function removeItem(name) {
  localStorage.removeItem(name);
}

function removeAllItems() {
  localStorage.clear();
}
