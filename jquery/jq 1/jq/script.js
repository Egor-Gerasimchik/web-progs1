let firstCard = null;
let secondCard = null;
let wait = false;

function shuffle(array) {
  var copy = [],
    n = array.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}

function generateField(size) {
  let cls = ["c1", "c2", "c3", "c4"];
  let counter = 0;
  let backs = [];
  for (let i = 0; i < size * size; i += 2) {
    backs[i] = cls[counter];
    backs[i + 1] = cls[counter];

    if (counter < 3) {
      counter++;
    } else counter = 0;
  }

  backs = shuffle(backs);



  let cards = [];
  for (let i = 0; i < size * size; i++) {
    let card = $("<div>");
    $(card).addClass("card");

    let flipper = $("<div>");
    $(flipper).addClass("flipper");

    let front = $("<div>");
    $(front).addClass("front");

    let back = $("<div>");
    $(back).addClass("back").addClass(backs[i]);

    $(flipper).append(back);
    $(flipper).prepend(front);
    $(card).append(flipper);

    cards.push(card);

    $(back).addClass("back").addClass(backs[i]);
  }

  $("#field").html("");

  $("#field").css({
    width: size * 150 + 16 + "px",
    "margin-left": (window.innerWidth - size * 150 + 16) / 2 + "px",
  });

  $("#field").append(cards);

  $(".flipper").click(function (event) {
    if (wait == false) {
      $(event.currentTarget).toggleClass("clicked");
      checkCard(event.currentTarget);
    }
  });
}

function checkCard(card) {
  if (firstCard == null) {
    firstCard = card;
  } else if (secondCard == null) {
    secondCard = card;
    wait = true;
    setTimeout(function () {
      if (
        $(firstCard).children(".back").attr("class") ==
        $(secondCard).children(".back").attr("class")
      ) {
        $(firstCard).css("visibility", "hidden");
        $(secondCard).css("visibility", "hidden");
      }
      firstCard = null;
      secondCard = null;
      wait = false;
    }, 1000)
  }
}

$("#btn").click(function (event) {
  size = $("#size").val();
  alert(size);

  if (size % 2 == 0) {
    generateField(size);
  } else {
    alert("Число не может быть нечётным!!!");
  }
});