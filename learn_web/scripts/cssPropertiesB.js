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

function backgrAttach(id, attach, blend, clip, color, image, origin, position, repeat, size, backgrImage) {
  let bodyImgState = document.body.style;
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');
  changeText[2].innerHTML = attach;
  if (backgrImage) {
    bodyImgState.backgroundImage = backgrImage;
    bodyImgState.backgroundAttachment = attach;
    changeText[0].innerHTML = 'body ';
    changeText[1].innerHTML = backgrImage;
  }
  else {
    doc.backgroundAttachment = attach;
    doc.backgroundBlendMode = blend;
    doc.backgroundClip = clip;
    doc.backgroundColor = color;
    doc.backgroundImage = image;
    doc.backgroundOrigin = origin;
    doc.backgroundPosition = position;
    doc.backgroundRepeat = repeat;
    doc.backgroundSize = size;
    changeText[1].innerHTML = image;
    changeText[0].innerHTML = 'div ';
  }
}

function rabbit() {
  let changeText = document.getElementsByClassName('text');
  document.body.style.backgroundImage = 'url("../images/rabbit_on_the_grass.jpeg")';
  document.body.style.backgroundAttachment = 'fixed';
  changeText[0].innerHTML = 'body ';
  changeText[1].innerHTML = "url('../images/rabbit_on_the_grass.jpeg')";
  changeText[2].innerHTML = 'fixed';
}
