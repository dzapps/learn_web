function funcAutoplay() {
  autoplay.style.display = "block";
  preload.style.display = "none";
  var play = document.getElementById("startplay");
  play.autoplay = true;

  // var mainOffset = document.getElementById("autoplay").offsetHeight;
  // var arrow = document.getElementsByClassName("rarrow");
  // var result = document.getElementsByClassName("result");
  //
  // for (var i=0; i<arrow.length; i++) {
  //   for (var j=0; j<result.length; j++) {
  //     var marginArrow = (mainOffset - arrow[i].offsetHeight) / 2;
  //     var marginResult = (mainOffset - result[j].offsetHeight) / 2;
  //     arrow[i].style.marginTop = marginArrow + "px";
  //     result[i].style.marginTop = marginResult + "px";
  //   }
  // }
}

function funcPreload() {
  preload.style.display = "block";
  autoplay.style.display = "none";

  // var mainOffset = document.getElementById("autoplay").offsetHeight;
  // var arrow = document.getElementsByClassName("rarrow");
  // var result = document.getElementsByClassName("result");
  //
  // for (var i=0; i<arrow.length; i++) {
  //   for (var j=0; j<result.length; j++) {
  //     var marginArrow = (mainOffset - arrow[i].offsetHeight) / 2;
  //     var marginResult = (mainOffset - result[j].offsetHeight) / 2;
  //     arrow[i].style.marginTop = marginArrow + "px";
  //     result[i].style.marginTop = marginResult + "px";
  //   }
  // }
}
