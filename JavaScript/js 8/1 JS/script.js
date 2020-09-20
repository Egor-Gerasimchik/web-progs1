console.log($(".circle").css("background-color"))

$(".circle").css({
  "background-color": "orange",
  "border-radius": "25%"
})

// $(".circle:nth-child(5)").css({
//   "background-color": "red"
// })

$(".circle:nth-child(2n)").css({
  "background-color": "imperial"
})

$(".circle:nth-child(2n + 1)").css({
  "background-color": "maroon"
})

$(".circle:nth-child(1)").css({
  "background-color": "salmon"
})

$(".circle").click(function () {
  $(event.target).toggleClass("lime");
});




$(".circle:nth-child(2n + 1)").click(function (event) {
  $(event.target).toggleClass("odd");
})

// $(".circle:nth-child()").css({
//   "background-color": "black"
// })

// for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
//   document.getElementsByClassName("circle")[i].style.backgroundColor = "orange";
//   document.getElementsByClassName("circle")[i].style.borderRadius = "15%";
// }