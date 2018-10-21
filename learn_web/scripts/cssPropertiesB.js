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
  document.getElementsByClassName('text')[1].innerHTML = text + ';';
}

function frontSide() {
  backfaceVisibDiv.style.transform = "rotateY(0deg)";
  document.getElementsByClassName('text')[0].innerHTML = 'rotateY(0deg);';
}

function backgrAttach(id, attach, blend, clip, color, image, origin, position, repeat, size, backgrImage) {
  let bodyImgState = document.body.style;
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');
  changeText[2].innerHTML = attach + ';';
  if (backgrImage) {
    bodyImgState.backgroundImage = backgrImage;
    bodyImgState.backgroundAttachment = attach;
    changeText[0].innerHTML = 'body ';
    changeText[1].innerHTML = backgrImage + ';';
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
  changeText[1].innerHTML = "url('../images/rabbit_on_the_grass.jpeg');";
  changeText[2].innerHTML = 'fixed;';
}

function blend(id, blend, img, secImg) {
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');

  doc.backgroundBlendMode = blend;
  doc.backgroundImage = img + ', ' + secImg;
  doc.backgroundRepeat = 'no-repeat, repeat';

  changeText[0].innerHTML = "url('../images/vasserman_big.jpg'), url('../images/background_img.jpeg');";
  changeText[1].innerHTML = 'no-repeat, repeat;';
  changeText[2].innerHTML = blend + ';';
}

function clip(id, clip) {
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');

  doc.backgroundColor = 'blue';
  doc.backgroundClip = clip;

  changeText[0].innerHTML = 'blue;';
  changeText[1].innerHTML = clip + ';';
}

function color(id, color) {
  document.getElementById(id).style.backgroundColor = color;

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function img(id, img, secImg) {
  let changeText = document.getElementsByClassName('text');

  if (secImg) {
    let doc = document.getElementById(id).style;
    doc.backgroundImage = img + ', ' + secImg;
    doc.backgroundRepeat = 'no-repeat, repeat';
    changeText[1].style.display = 'block';
    changeText[0].innerHTML = img + ', ' + secImg + ';';

  } else {
    document.getElementById(id).style.backgroundImage = img;
    changeText[1].style.display = 'none';
    changeText[0].innerHTML = img + ';';
  }
}

function origin(id, origin) {
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');

  doc.backgroundImage = 'url("../images/html_digit.jpg")';
  doc.backgroundColor = 'blue';
  doc.backgroundRepeat = 'no-repeat';
  doc.backgroundOrigin = origin;
  doc.backgroundSize = '80px 80px';

  changeText[0].innerHTML = origin + ';';
}

function position(id, x, y, Xperc, Yperc, pos) {
  let doc = document.getElementById(id).style;
  let changeText = document.getElementsByClassName('text');

  doc.backgroundImage = 'url("../images/html_digit.jpg")';
  doc.backgroundColor = 'blue';
  doc.backgroundRepeat = 'no-repeat';
  doc.backgroundSize = '60px 60px';

  if(Xperc) {
    doc.backgroundPosition = Xperc + ' ' + Yperc;
    changeText[0].innerHTML = Xperc + ' ' + Yperc + ';';
  } else if (x) {
    doc.backgroundPosition = x + ' ' + y;
    changeText[0].innerHTML = x + ' ' +  y + ';';
  } else {
    doc.backgroundPosition = pos;
    changeText[0].innerHTML = pos + ';';
  }
}

function showPosition() {
  document.getElementById('posExampleBarDoubleLevel').style.display = 'block';
  document.getElementsByClassName('text')[0].innerHTML = '?;'
}

function repeat(id, repeat) {
  let doc = document.getElementById(id).style;

  doc.backgroundImage = 'url("../images/html_digit.jpg")';
  doc.backgroundRepeat = repeat;
  doc.backgroundColor = 'blue';
  doc.backgroundSize = '60px 60px';

  document.getElementsByClassName('text')[0].innerHTML = repeat + ';';
}

function size(id, size) {
  let doc = document.getElementById(id).style;

  doc.backgroundImage = 'url("../images/html_digit.jpg")';
  doc.backgroundRepeat = 'no-repeat';
  doc.backgroundColor = 'blue';
  doc.backgroundSize = size;

  document.getElementsByClassName('text')[0].innerHTML = size + ';';
}

function border(id, style) {
  document.getElementById(id).style.border = style;

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function borderBott(id, style) {
  document.getElementById(id).style.borderBottom = style;

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordBottColor(id, color) {
  document.getElementById(id).style.borderBottomColor = color;
  document.getElementById(id).style.borderBottomWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function showBordBottColor() {
  document.getElementById('bordBottColorExampleBarDoubleLevel').style.display = 'block';
}

function bordBottLeftRad(id, rad) {
  document.getElementById(id).style.borderBottomLeftRadius = rad;
  document.getElementById(id).style.borderBottomWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = rad + ';';
}

function bordBottRightRad(id, rad) {
  document.getElementById(id).style.borderBottomRightRadius = rad;
  document.getElementById(id).style.borderBottomWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = rad + ';';
}

function bordBottStyle(id, style) {
  document.getElementById(id).style.borderBottomStyle = style;
  document.getElementById(id).style.borderBottomWidth = '5px';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordBottWidth(id, width) {
  document.getElementById(id).style.borderBottomWidth = width;

  document.getElementsByClassName('text')[0].innerHTML = width + ';';
}

function borderCollapse(id, style) {
  let doc = document.getElementById(id).style;
  doc.borderCollapse = style;
  doc.display = 'inline-block';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordColor(id, color) {
  document.getElementById(id).style.borderColor = color;
  document.getElementById(id).style.borderWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function showBordColor() {
  document.getElementById('bordColorExampleBarDoubleLevel').style.display = 'block';
}

function bordLeft(id, color) {
  document.getElementById(id).style.borderLeft = color;

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function bordLeftColor(id, color) {
  document.getElementById(id).style.borderLeftColor = color;
  document.getElementById(id).style.borderLeftWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function showBordLeftColor() {
  document.getElementById('bordLeftColorExampleBarDoubleLevel').style.display = 'block';
}

function bordRightColor(id, color) {
  document.getElementById(id).style.borderRightColor = color;
  document.getElementById(id).style.borderRightWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function showBordRightColor() {
  document.getElementById('bordRightColorExampleBarDoubleLevel').style.display = 'block';
}

function bordLeftStyle(id, style) {
  document.getElementById(id).style.borderLeftStyle = style;
  document.getElementById(id).style.borderLeftWidth = '5px';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordRightStyle(id, style) {
  document.getElementById(id).style.borderRightStyle = style;
  document.getElementById(id).style.borderRightWidth = '5px';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordLeftWidth(id, width) {
  document.getElementById(id).style.borderLeftWidth = width;

  document.getElementsByClassName('text')[0].innerHTML = width + ';';
}

function bordRightWidth(id, width) {
  document.getElementById(id).style.borderRightWidth = width;

  document.getElementsByClassName('text')[0].innerHTML = width + ';';
}

function bordRight(id, style) {
  document.getElementById(id).style.borderRight = style;

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function borderTop(id, style) {
  document.getElementById(id).style.borderTop = style;

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordTopColor(id, color) {
  document.getElementById(id).style.borderTopColor = color;
  document.getElementById(id).style.borderTopWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = color + ';';
}

function showBordTopColor() {
  document.getElementById('bordTopColorExampleBarDoubleLevel').style.display = 'block';
}

function bordTopStyle(id, style) {
  document.getElementById(id).style.borderTopStyle = style;
  document.getElementById(id).style.borderTopWidth = '5px';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bordTopLeftRad(id, rad) {
  document.getElementById(id).style.borderTopLeftRadius = rad;
  document.getElementById(id).style.borderTopWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = rad + ';';
}

function bordTopRightRad(id, rad) {
  document.getElementById(id).style.borderTopRightRadius = rad;
  document.getElementById(id).style.borderTopWidth = '3px';

  document.getElementsByClassName('text')[0].innerHTML = rad + ';';
}

function bordTopWidth(id, width) {
  document.getElementById(id).style.borderTopWidth = width;

  document.getElementsByClassName('text')[0].innerHTML = width + ';';
}

function bordSpacing(id, spacing, collapse) {
  let doc = document.getElementById(id).style;
  doc.borderSpacing = spacing;
  doc.borderCollapse = collapse;
  doc.display = 'inline-block';

  document.getElementsByClassName('text')[0].innerHTML = spacing + ';';
  document.getElementsByClassName('text')[1].innerHTML = collapse + ';';
}

function bordRad(id, rad) {
  document.getElementById(id).style.borderRadius = rad;

  document.getElementsByClassName('text')[0].innerHTML = rad + ';';

  let a = document.getElementsByClassName('exampleDivCont');
  let lenA = a.length;
  for (var j=0; j<=lenA; j++) {
    a[j].style.display = "none";
  }
}

function bordImg(id, src, slice, width, outset, repeat, backgrcolor) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;
  doc.borderImageOutset = outset;
  doc.backgroundColor = backgrcolor;

  document.getElementsByClassName('text')[0].innerHTML = src + ' ' + slice + ' ' + repeat +';';
}

function bordImgOutset(id, src, slice, width, outset, repeat) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;
  doc.borderImageOutset = outset;
  doc.backgroundColor = 'blue';

  document.getElementsByClassName('text')[0].innerHTML = outset + ';';
}

function bordImgSlice(id, src, slice, width, outset, repeat) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;
  doc.borderImageOutset = outset;

  document.getElementsByClassName('text')[0].innerHTML = slice;
}

function bordImgRepeat(id, src, slice, width, outset, repeat) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;
  doc.borderImageOutset = outset;

  document.getElementsByClassName('text')[0].innerHTML = repeat + ';';
}

function bordImgSrc(id, src, slice, width, outset, repeat) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;
  doc.borderImageOutset = outset;

  document.getElementsByClassName('text')[0].innerHTML = src + ';';

  let len = src.length;
  console.log(src.substr(4, 28));
  document.getElementById('bordImgDiv').src = src.substr(4, len-5);
}

function bordImgWidth(id, src, slice, width, outset, repeat) {
  doc = document.getElementById(id).style;
  doc.borderImage = src + ' ' + slice + ' ' + repeat;
  doc.borderImageWidth = width;

  document.getElementsByClassName('text')[0].innerHTML = width +';';
}

function bordRadCont(id, rad, idCont) {
  document.getElementById(id).style.borderRadius = rad;
  document.getElementsByClassName('text')[0].innerHTML = rad + ';';
  let a = document.getElementsByClassName('exampleDivCont');
  let lenA = a.length;
  for (var j=0; j<=lenA; j++) {
    document.getElementById(idCont).style.display = "block";
    a[j].style.display = "none";
  }
}

function bordStyle(id, style) {
  document.getElementById(id).style.borderStyle = style;
  document.getElementById(id).style.borderWidth = '5px';

  document.getElementsByClassName('text')[0].innerHTML = style + ';';
}

function bottom(id, pos) {
  doc = document.getElementById(id).style
  doc.position = pos;
  doc.bottom = '10px';
  doc.width = '110px';
  doc.height = '30px';
  doc.border = '2px solid blue';

  document.getElementsByClassName('text')[0].innerHTML = pos + ';';
}
