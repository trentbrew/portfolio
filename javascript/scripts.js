$(window).ready(function() {
  console.log("window is ready");
  //console.log("port1 pos: " + $(".port1").getBoundingClientRect().top);
});

$(document).ready(function() {
  console.log("height: " + document.body.clientHeight);
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  //var scrollBottom = $(window).scrollTop() + $(window).height();
  //console.log("scroll: " + scroll);
  //console.log("scroll bottom: " + $(window).height() - scroll);

  $(".parallax").css({
    "opacity":((200-(scroll/2.5))/100),
    "top": 240 + (scroll / 2) + "px"
  });

  $(".parallax h1").css({
    "margin-top":(40-(scroll/10))
  });

  if(scroll >= 400) {
    $(".port3").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port1").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
  if(scroll >= 800) {
    $(".port5").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port6").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
  if(scroll >= 1200) {
    $(".port7").css({
      "opacity":"1",
      "margin-top":"0px"
    });
    setTimeout(function() {
      $(".port8").css({
        "opacity":"1",
        "margin-top":"0px"
      });
    }, 300);
  }
});

//---gallery hover stuff---

var container = document.querySelector(".drawing-banner");
var mover = document.querySelector(".item-mover");

/*container.addEventListener("mousemove", function(e) {
  mover.style.backgroundPositionX = -e.offsetX/2 + "px";
  mover.style.backgroundPositionY = -e.offsetY*2.5 + "px";
});

container.addEventListener("mouseenter", function() {
  
  setTimeout(function() {
    mover.classList.add("no-more-slidey");
    //container.removeEventListener("mouseenter");
  }, 250);
  
});*/

$(".gal-image").click(function() {
  var currentImage = $(".expanded .image")[0].src;
  var newImage = this.children[0].src;
  currentImage = newImage;
  console.log("clicked image");
  console.log("current image: " + currentImage);
  $(".expanded").css({
    "opacity":"1",
    "pointer-events":"all"
  });
  $(".expanded .image")[0].src=currentImage;
  $(".expanded").click(function() {
    console.log("back to gallery");
    $(this).css({
      "pointer-events":"none",
      "opacity":"0"
    });
  });
  
});

/*$(".expanded") {

}*/