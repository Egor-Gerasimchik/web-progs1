console.log($(".circle").css("background-color"));

$(".circle").css({
  "background-color": "black",
  "border-radius": "25%",
});

// $(".circle:nth-child(5)").css({
//   "background-color": "red"
// })

$(".circle:nth-child(2n+1)").css({
  "background-color": "red",
});

$(".circle:nth-child(2n)").css({
  "background-color": "yellow",
});

$(".circle:nth-child(1)").css({
  "background-color": "black",
});

$(".circle:nth-child(5)").css({
  "background-color": "black",
});

$(".circle:nth-child(9)").css({
  "background-color": "black",
});

$(".circle:nth-child(2n)").click(function () {
  $(event.target).toggleClass("clicked");
});

// $(".circle:nth-child()").css({
//   "background-color": "black"
// })

// for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
//   document.getElementsByClassName("circle")[i].style.backgroundColor = "orange";
//   document.getElementsByClassName("circle")[i].style.borderRadius = "15%";
// }
