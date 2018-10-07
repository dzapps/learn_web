// function highlightButt(id) {
//   let data = document.querySelector('#alignContentMenu');
//   let butt = data.querySelectorAll('button');
//   let lenButt = butt.length;
//
//   for (let i=0; i<=lenButt; i++) {
//     let link = document.querySelector(`a[href="#${id}"]`);
//     link.querySelector('button').style.backgroundColor = 'red';
//     butt[i].style.backgroundColor = 'green';
//   }
// }

function changeSingle(id, propData, state) {
  document.getElementById(id).style = `${propData}: ` + state;
}

function showAndHide(id) {
  let a = document.getElementsByClassName('show-and-hide');
  let lenA = a.length;
  for (var j=0; j<=lenA; j++) {
    document.getElementById(id).style.display = "flex";
    a[j].style.display = "none";
  }
}

function backfaceVisib(imgId, imgState, text) {
  document.getElementById(`${imgId}`).style.backfaceVisibility = imgState;
  document.getElementById(`${imgId}`).style.transform = 'rotateY(180deg)';

  document.getElementsByClassName('text')[0].innerHTML = 'rotateY(180deg);';
  document.getElementsByClassName('text')[1].innerHTML = text;
}

function frontSide() {
  backfaceVisibDiv.style.transform = "rotateY(0deg)";
  document.getElementsByClassName('text')[0].innerHTML = 'rotateY(0deg);';
}

function backgrAttach(id) {
  let html = document.getElementById(id).innerHTML;
  let text = 'Example text. ';
  for (let j=0; j<=43; j++) {
    html += text;
  }
}
backgrAttach('backgrAttachD');
